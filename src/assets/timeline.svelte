<script>
    import { derived } from "svelte/store";

    export let activityData;
    export let progress;
    export let isScrolled;
    export let scrollToSection;

    const EDGE_SPACE = 15; // % of width reserved for inactive dots on each edge
    const MIN_DOT_SPACING = 2; // % minimum space between dots

    $: dots = activityData.map((activity, index) => {
        const normalPosition = (index / (activityData.length - 1)) * 100;
        const isActive =
            normalPosition >= progress.start && normalPosition <= progress.end;

        if (isActive) {
            return { activity, position: normalPosition, isActive };
        }

        // Cluster inactive dots towards edges
        if (normalPosition < progress.start) {
            const relativePos = (normalPosition / progress.start) * EDGE_SPACE;
            return { activity, position: relativePos, isActive };
        } else {
            const relativePos =
                100 -
                EDGE_SPACE +
                ((normalPosition - progress.end) / (100 - progress.end)) *
                    EDGE_SPACE;
            return { activity, position: relativePos, isActive };
        }
    });

    // Group dots that are too close together
    $: groupedDots = dots.reduce((acc, dot, index) => {
        if (index === 0) return [dot];

        const prevDot = acc[acc.length - 1];
        if (
            !Array.isArray(prevDot) &&
            Math.abs(dot.position - prevDot.position) < MIN_DOT_SPACING &&
            !dot.isActive &&
            !prevDot.isActive
        ) {
            acc[acc.length - 1] = [prevDot, dot];
        } else {
            acc.push(dot);
        }
        return acc;
    }, []);
</script>

<div class="absolute top-0 w-full -mt-1">
    {#each groupedDots as dot, index}
        {#if Array.isArray(dot)}
            <!-- Grouped dots -->
            <div
                class="absolute group"
                style="left: {(dot[0].position + dot[1].position) / 2}%"
            >
                <button
                    class="timeline-dot w-5 h-3 rounded-full bg-white dark:bg-gray-800 border-2 border-gray-300 hover:border-blue-300 transition-all duration-300"
                    on:click={() => scrollToSection(dot[0].activity.id)}
                    aria-label={dot[0].activity.title + dot[1].activity.title}
                ></button>
                <div
                    class="absolute {isScrolled ? 'top-7' : '-top-8'} 
                 left-1/2 -translate-x-1/2
                 opacity-0 group-hover:opacity-100
                 transition-all duration-300 z-50 transform pointer-events-none"
                >
                    <span
                        class="text-sm bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap"
                    >
                        {dot[0].activity.title} + {dot[1].activity.title}
                    </span>
                </div>
            </div>
        {:else}
            <!-- Single dot -->
            <div class="absolute group" style="left: {dot.position}%">
                <button
                    class="timeline-dot w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2
                 {dot.isActive
                        ? 'bg-blue-500 border-blue-500'
                        : 'border-gray-300'}
                 transition-all duration-300 hover:border-blue-300"
                    on:click={() => scrollToSection(dot.activity.id)}
                    aria-label={dot.activity.title}
                ></button>
                <div
                    class="absolute {isScrolled ? 'top-7' : '-top-8'} 
                 left-1/2 -translate-x-1/2
                 {isScrolled
                        ? dot.isActive
                            ? 'opacity-100'
                            : 'opacity-0 group-hover:opacity-100'
                        : ''} 
                 transition-all duration-300 z-50 transform pointer-events-none"
                >
                    <span
                        class="text-sm bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap"
                    >
                        {dot.activity.title}
                    </span>
                </div>
            </div>
        {/if}
    {/each}
</div>

<style>
    .timeline-dot {
        cursor: pointer;
        transform-origin: center;
    }

    [class*="opacity"] {
        transition: opacity 0.2s ease-in-out;
    }
</style>
