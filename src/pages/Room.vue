<template>
  <main id="room" class="page-container">
    <table class="room-table">
      <thead>
        <tr>
          <th class="room">{{ text.table.header.room }}</th>
          <th class="status">{{ text.table.header.status }}</th>
          <th class="session">{{ text.table.header.session }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="roomSession in roomsSession"
          :key="`r-${roomSession.room.id}`"
        >
          <td class="room">
            <span
              class="bubble"
              :class="{ full: roomsStatus[roomSession.room.id] }"
            ></span>
            <span>{{
              roomSession.room[languageType].name.split(" / ")[0]
            }}</span>
          </td>
          <td class="status">
            <span
              class="bubble"
              :class="{ full: roomsStatus[roomSession.room.id] }"
            ></span>
            <span class="text">{{
              roomsStatus[roomSession.room.id]
                ? text.table.body.status.full
                : text.table.body.status.available
            }}</span>
          </td>
          <td class="session">
            <router-link
              v-if="roomSession.session"
              :to="getSessionLocation(roomSession.session.id)"
              class="content"
            >
              <h3 class="period">
                {{
                  getSessionPeriod(
                    roomSession.session.start,
                    roomSession.session.end
                  )
                }}
              </h3>
              <h2 class="title">
                {{ roomSession.session[languageType].title }}
              </h2>
            </router-link>
            <p v-else class="content empty">{{ text.table.body.empty }}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script lang="ts">
import io from 'socket.io-client'
import axios from 'axios'
import { defineComponent, reactive, ref, onMounted, onBeforeUnmount, computed, nextTick } from '@vue/composition-api'
import { createAgendaService, RoomSession, formatTimeString } from '@/services/agenda'

import '@/assets/scss/pages/room.scss'
import { useRenderedEventDispatcher } from '@/plugins/renderedEventDispatcher'
import { useLanguageService } from '@/services/hooks'
import { Location } from 'vue-router'

export default defineComponent({
  name: 'Room',
  setup () {
    const dispatchRenderedEvent = useRenderedEventDispatcher()
    const languageService = useLanguageService()
    const languageType = computed(() => languageService.languageType === 'zh-TW' ? 'zh' : languageService.languageType)
    const text = computed(() => languageService.languagePack.room)
    const timer = ref(-1)
    const roomsSession = ref<RoomSession[]>([])
    const rawRoomsStatus = ref<{ id: string; isFull: boolean }[]>([])
    const roomsStatus = computed(() => Object.fromEntries(rawRoomsStatus.value.map((room) => [room.id, room.isFull])))
    let socket: SocketIOClient.Socket | null = null

    const agendaService = reactive(createAgendaService([
      'RB105',
      'AU',
      'TR209', 'TR211', 'TR212', 'TR213', 'TR214',
      'TR309', 'TR311', 'TR313',
      'TR409-2', 'TR410', 'TR411', 'TR412-1', 'TR412-2', 'TR413-1', 'TR413-2'
    ]))

    const registerSocket = () => {
      const baseUrl = 'https://coscup2020-room.deviltea.me'
      const updateData = async () => {
        const { data } = await axios.get(`${baseUrl}/api/rooms_status`)
        rawRoomsStatus.value = data.roomsStatus
      }

      try {
        socket = io(baseUrl)
        socket.on('connect', updateData)
        socket.on('update', updateData)
      } catch (error) {
        console.error(error)
      }
    }

    const unregisterSocket = () => {
      if (socket && socket.connected) {
        socket.disconnect()
        socket = null
      }
    }

    const getSessionPeriod = (start: Date, end: Date) => `${formatTimeString(start, '：')} ~ ${formatTimeString(end, '：')}`

    const getSessionLocation = (sessionId): Location => ({
      name: 'AgendaDetail',
      params: {
        sessionId
      },
      query: {
        from: 'room'
      }
    })

    onMounted(async () => {
      dispatchRenderedEvent()
      await nextTick()
      timer.value = setInterval((function cb () {
        roomsSession.value = agendaService.getRoomsInProgressSession()
        return cb
      })(), 3000)
      registerSocket()
    })

    onBeforeUnmount(() => {
      clearInterval(timer.value)
      unregisterSocket()
    })

    return {
      text,
      languageType,
      roomsSession,
      roomsStatus,
      getSessionPeriod,
      getSessionLocation
    }
  }
})
</script>
