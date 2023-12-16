<template>
    <div class="ml-5">
      <router-link :to="{name: 'byCategory', params: {category: categories.id}}">
        <a class="hover:scale-125 hover:text-orange-600"  >
            {{categories.name }} 
        </a>
        </router-link>
        <i v-if="children>0" @click="active=!active"  
        class="pi pi-arrow-down pr-2 inline-flex items-center px-2 h-full transition-colors hover:text-green-700 dark:hover:text-purple-700"></i>
      </div> 
            <div v-if="children>0 && active">
                  <div class="ml-5" v-for="category in categories.children" v-bind:key="category.children">
                    <CategoryItem   :categories="category"></CategoryItem>
                 </div>
            </div>
       

</template>

<script >
export default {
  props: {
    categories:Object,
    
    
},
  data() {
    return {
      active: false,
      children: this.hasChildren()
    };
  },
  methods:
  {
    hasChildren()
    {
      const { children } = this.categories
      return children.length
    }
  }
}
</script>