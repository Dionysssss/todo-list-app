<script setup>
import { useTodoListStore } from '../stores/todoList.js'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useTodoListStore()

const { doneList } = storeToRefs(store)

// console.log(typeof(todoList))

// Reactive state for doneList
// const doneList = ref([])

// Watch for changes in todoList and update doneList
// store.$subscribe((mutation, state) => {
//     console.log(mutation.type)
//     if (mutation.type === 'patch object')  {
//     doneList.value = state.todoList.filter(todo => todo.completed);
//   }
// });


// const doneList = computed(() => todoList.value.filter(todo => todo.completed))


// this.todoList = this.todoList.filter((object) => {
//     return object.id != itemId
//             })

const { deleteDone } = store

</script>

<template>
    <h3>Done List</h3>
    <div v-for="todo in doneList" :key="`done-${todo.id}`" class="item">
        <div class="content">
            <span >{{ todo.item }}</span>
            <!-- <div>
                <span @click.stop="toggleCompleted(todo.id)">&#10004;</span> -->
            <span @click="deleteDone(todo.id)" class="x">&#10060;</span>
            <!-- </div> -->
            
        </div>
    </div>
</template>

<style scoped>
/* .item{
    display: none;
}
.completed {
    display: inline;
} */
</style>