<template>
  <div class="container mx-auto">
    <div class="grid p-8 text-gray-700">
      <div class="text-8xl text-red-500">Todo List</div>
      <div class="mt-8 flex items-center">
        <input
          v-model="description"
          type="input"
          class="text-2xl border border-gray-400 rounded-md p-2"
        />
        <button
          class="rounded-md p-2 bg-blue-400 text-white ml-4"
          @click="submitTodo"
        >
          Submit
        </button>
      </div>
      <div class="grid gap-4 mt-8">
        <template v-if="todos.length">
          <div v-for="(todo, index) in todos" :key="todo.id">
            <div class="p-2 bg-gray-100 rounded-md flex justify-between">
              <div>
                <span :class="{ 'text-blue-400': todo.checked }"
                  >Description</span
                >
                <span class="ml-2">{{ todo.description }}</span>
                <input v-model="todo.checked" class="ml-2" type="checkbox" />
              </div>
              <div
                class="text-red-500 cursor-pointer"
                :data-testId="`todo-delete-${index}`"
                @click="removeTodo(todo.id)"
              >
                delete!
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div>Please input your awesome todo</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

type Todo = {
  id: string
  description: string
  checked: boolean
}

export default defineComponent({
  setup() {
    const description = ref("")

    const todos = ref<Todo[]>([])

    const submitTodo = () => {
      todos.value.push({
        id: `${new Date().getTime()}`,
        description: description.value,
        checked: false,
      })

      description.value = ""
    }

    const removeTodo = (id: string) => {
      todos.value = todos.value.filter((todo) => {
        return todo.id !== id
      })
    }

    return {
      description,
      todos,
      submitTodo,
      removeTodo,
    }
  },
})
</script>
