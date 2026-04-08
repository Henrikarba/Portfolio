<script>
    export let value = { start: 0, end: 0 };
</script>

<div
    class="relative h-2 w-full bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
>
    <div
        class="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-300"
        style="left: {value.start}%; width: {value.end - value.start}%"
    ></div>
</div>
