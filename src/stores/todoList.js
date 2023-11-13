import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
        todoList: [],
        id: 0,
        doneList: []
    }),
    actions: {
        addTodo(item) {
            this.todoList.push({ item, id: this.id++, completed: false})
        },
        deleteTodo(itemId) {
            this.todoList = this.todoList.filter((object) => {
                return object.id != itemId
            })
        },
        toggleCompleted(idToFind) {
            const todo = this.todoList.find((obj) => obj.id === idToFind)
            if (todo) {
                if(!todo.completed)
                {
                    this.doneList.push({item: todo.item, id: todo.id })
                }else{
                    this.doneList = this.doneList.filter((object) => {
                        return object.id != todo.id
                    })
                }
                todo.completed = !todo.completed
                
            }
        },
        deleteDone(idToDelete) {
            this.doneList = this.doneList.filter((object) => {
                return object.id != idToDelete
            });
            this.deleteTodo(idToDelete);
        }
    }
})