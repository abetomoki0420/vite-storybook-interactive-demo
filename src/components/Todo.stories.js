import Todo from "./Todo.vue"
import { getByRole, screen, fireEvent } from "@storybook/testing-library"

export default {
  component: Todo,
  title: "Todo",
}

const Template = (args) => ({
  components: { Todo },
  setup() {
    return { args }
  },
  template: '<Todo v-bind="args" />',
})

export const CreateTodo = Template.bind({})
CreateTodo.play = async () => {
  await fireEvent.input(screen.getByRole("textbox"), {
    target: {
      value: "first todo",
    },
  })
  await fireEvent.click(screen.getByRole("button"))
}

export const CheckTodo = Template.bind({})
CheckTodo.play = async () => {
  await fireEvent.input(screen.getByRole("textbox"), {
    target: {
      value: "first todo",
    },
  })
  await fireEvent.click(screen.getByRole("button"))

  await fireEvent.click(screen.getByRole("checkbox"))
}

export const DeleteTodo = Template.bind({})
DeleteTodo.play = async () => {
  await fireEvent.change(screen.getByRole("textbox"), {
    target: {
      value: "first todo",
    },
  })
  await fireEvent.click(screen.getByRole("button"))

  await fireEvent.input(screen.getByRole("textbox"), {
    target: {
      value: "second todo",
    },
  })
  await fireEvent.click(screen.getByRole("button"))

  await fireEvent.click(screen.getByTestId("todo-delete-0"))
}
