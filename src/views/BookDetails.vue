<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5">{{ bookinfo.title}}</h1>
        <img v-bind:src="bookinfo.coverUrl.slice(5)" :alt="bookinfo.title"  class="w-full">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong class="font-bold"> ISBN Number:</strong> {{ bookinfo.isbn }}
            </div>
            <div>
                <strong class="font-bold"> Quantity:</strong> {{ bookinfo.quantity }}
            </div>
            <div>
                <strong class="font-bold"> Categories:</strong> {{ bookinfo.category.name}}
            </div>
        </div>
        <div>
            <h2 class="text-2xl font-semibold mb-3">Description</h2>
            {{ bookinfo.longDescription }}<br>
        </div>
    </div>
</template>

<script >
    import store from '../store';
    export default 
    {
        props: 
        {
            id:String,
        },
        computed:
        {
            bookinfo: function()
            {
                store.dispatch('searchBooksById',this.id);
                return store.state.booksById;
            }
        }

}
</script>