<template>
    <div class="flex justify-center gap-10 m-2">
        <a class="btn btn-secondary " role="button"  @click="active=!active" >
            {{categories.name }} 
        </a>
            <div v-if="children>0 && active">
                  <div v-for="category in categories.children" v-bind:key="category.children">
                    <Categories   :categories="category"></Categories>
                 </div>
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