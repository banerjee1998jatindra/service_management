<script setup>
import { useLayout } from '@/layout/composables/layout';
import { ProductService } from '@/service/ProductService';
import { onMounted, ref, watch } from 'vue';


const { getPrimary, getSurface, isDarkTheme } = useLayout();

const products = ref(null);
const chartData = ref(null);
const chartOptions = ref(null);


const carouselResponsiveOptions = ref([
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
]);

onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

function setChartData() {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                type: 'bar',
                label: 'Subscriptions',
                backgroundColor: documentStyle.getPropertyValue('--p-primary-400'),
                data: [4000, 10000, 15000, 4000],
                barThickness: 32
            },
            {
                type: 'bar',
                label: 'Advertising',
                backgroundColor: documentStyle.getPropertyValue('--p-primary-300'),
                data: [2100, 8400, 2400, 7500],
                barThickness: 32
            },
            {
                type: 'bar',
                label: 'Affiliate',
                backgroundColor: documentStyle.getPropertyValue('--p-primary-200'),
                data: [4100, 5200, 3400, 7400],
                borderRadius: {
                    topLeft: 8,
                    topRight: 8
                },
                borderSkipped: true,
                barThickness: 32
            }
        ]
    };
}

function setChartOptions() {
    const documentStyle = getComputedStyle(document.documentElement);
    const borderColor = documentStyle.getPropertyValue('--surface-border');
    const textMutedColor = documentStyle.getPropertyValue('--text-color-secondary');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: textMutedColor
                },
                grid: {
                    color: 'transparent',
                    borderColor: 'transparent'
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: textMutedColor
                },
                grid: {
                    color: borderColor,
                    borderColor: 'transparent',
                    drawTicks: false
                }
            }
        }
    };
}



watch([getPrimary, getSurface, isDarkTheme], () => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

</script>

<template>
    
    <div class="grid grid-cols-12 gap-8">

        <div class="col-span-12 lg:col-span-12 xl:col-span-12">
            
            <Carousel :value="products" :numVisible="4"  :numScroll="4"  :responsiveOptions="carouselResponsiveOptions">
                <template #item="slotProps">
                    <div class="rounded m-2">
                        <div class="">
                            <div class="relative mx-auto">
                                <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>

        <div class="col-span-12 lg:col-span-12 xl:col-span-12">
            
            <Splitter style="height: 350px" class="mb-8">
                <SplitterPanel :size="10" :minSize="10">
                    <div className="h-full flex items-center justify-center">Panel 1</div>
                </SplitterPanel>
                <SplitterPanel :size="40" :minSize="10">
                    <div className="h-full flex justify-around flex-wrap">
                        <div class="col-span-12 lg:col-span-3 xl:col-span-3  m-2">
                            <div class="card mb-0">
                                <div class="flex justify-between mb-4">
                                    <div>
                                        <span class="block text-muted-color font-medium mb-4">Orders</span>
                                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152</div>
                                    </div>
                                    <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                        <i class="pi pi-shopping-cart text-blue-500 !text-xl"></i>
                                    </div>
                                </div>
                                <span class="text-primary font-medium">24 new </span>
                                <span class="text-muted-color">since last visit</span>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-3 xl:col-span-3 m-2">
                            <div class="card mb-0">
                                <div class="flex justify-between mb-4">
                                    <div>
                                        <span class="block text-muted-color font-medium mb-4">Orders</span>
                                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152</div>
                                    </div>
                                    <div class="flex items-center justify-center bg-blue-100 dark:bg-blue-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                        <i class="pi pi-shopping-cart text-blue-500 !text-xl"></i>
                                    </div>
                                </div>
                                <span class="text-primary font-medium">24 new </span>
                                <span class="text-muted-color">since last visit</span>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-3 xl:col-span-3 m-2">
                            <div class="card mb-0">
                                <div class="flex justify-between mb-4">
                                    <div>
                                        <span class="block text-muted-color font-medium mb-4">Revenue</span>
                                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">$2.100</div>
                                    </div>
                                    <div class="flex items-center justify-center bg-orange-100 dark:bg-orange-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                        <i class="pi pi-dollar text-orange-500 !text-xl"></i>
                                    </div>
                                </div>
                                <span class="text-primary font-medium">%52+ </span>
                                <span class="text-muted-color">since last week</span>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-3 xl:col-span-3 m-2">
                            <div class="card mb-0">
                                <div class="flex justify-between mb-4">
                                    <div>
                                        <span class="block text-muted-color font-medium mb-4">Customers</span>
                                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">28441</div>
                                    </div>
                                    <div class="flex items-center justify-center bg-cyan-100 dark:bg-cyan-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                        <i class="pi pi-users text-cyan-500 !text-xl"></i>
                                    </div>
                                </div>
                                <span class="text-primary font-medium">520 </span>
                                <span class="text-muted-color">newly registered</span>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-3 xl:col-span-3 m-2">
                            <div class="card mb-0">
                                <div class="flex justify-between mb-4">
                                    <div>
                                        <span class="block text-muted-color font-medium mb-4">Comments</span>
                                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152 Unread</div>
                                    </div>
                                    <div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                        <i class="pi pi-comment text-purple-500 !text-xl"></i>
                                    </div>
                                </div>
                                <span class="text-primary font-medium">85 </span>
                                <span class="text-muted-color">responded</span>
                            </div>
                        </div>
                        <div class="col-span-12 lg:col-span-3 xl:col-span-3 m-2">
                            <div class="card mb-0">
                                <div class="flex justify-between mb-4">
                                    <div>
                                        <span class="block text-muted-color font-medium mb-4">Comments</span>
                                        <div class="text-surface-900 dark:text-surface-0 font-medium text-xl">152 Unread</div>
                                    </div>
                                    <div class="flex items-center justify-center bg-purple-100 dark:bg-purple-400/10 rounded-border" style="width: 2.5rem; height: 2.5rem">
                                        <i class="pi pi-comment text-purple-500 !text-xl"></i>
                                    </div>
                                </div>
                                <span class="text-primary font-medium">85 </span>
                                <span class="text-muted-color">responded</span>
                            </div>
                        </div>
                    </div>
                </SplitterPanel>
                <SplitterPanel :size="10" :minSize="10">
                    <div className="h-full flex items-center justify-center">Panel 3</div>
                </SplitterPanel>
            </Splitter>
        </div>

        <div v-animateonscroll="{ enterClass: 'animate-zoomin', leaveClass: 'animate-fadeout' }" class="   animate-duration-1000 col-span-12 lg:col-span-12 xl:col-span-12">
            <Chip style="background:none">
                <span class="flex items-center justify-center">
                    <i class="pi pi-apple" style="font-size: 2.5rem"></i>
                </span>
                <span class="ml-2 font-medium">Apple</span>
            </Chip>
            <Chip style="background:none">
                <span class="flex items-center justify-center">
                    <i class="pi pi-facebook" style="font-size: 2.5rem"></i>
                </span>
                <span class="ml-2 font-medium">Facebook</span>
            </Chip>
            <Chip style="background:none">
                <span class="flex items-center justify-center">
                    <i class="pi pi-google" style="font-size: 2.5rem"></i>
                </span>
                <span class="ml-2 font-medium">Google</span>
            </Chip>
            <Chip style="background:none">
                <span class="flex items-center justify-center">
                    <i class="pi pi-microsoft" style="font-size: 2.5rem"></i>
                </span>
                <span class="ml-2 font-medium">Microsoft</span>
            </Chip>
           
        </div>
        <div class="col-span-12 text-center ">
            <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Marvelous Features</div>
            <span class="text-muted-color text-2xl">Placerat in egestas erat...</span>
        </div>
        <div class="col-span-12 lg:col-span-12 xl:col-span-12">
            <div id="features" class="py-6 px-6 lg:px-20 mx-0 lg:mx-20">
                <div class="grid grid-cols-12 gap-4 justify-center">

                    <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0 animate-duration-1000 animate-ease-in-out" v-animateonscroll="{ enterClass: 'animate-flipup', leaveClass: 'animate-fadeout' }">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-yellow-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-users !text-2xl text-yellow-700"></i>
                                </div>
                                <h5 class="mb-2 text-surface-900 dark:text-surface-0">Easy to Use</h5>
                                <span class="text-surface-600 dark:text-surface-200">Posuere morbi leo urna molestie.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0 animate-duration-1000 animate-ease-in-out" v-animateonscroll="{ enterClass: 'animate-flipup', leaveClass: 'animate-fadeout' }">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-cyan-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-palette !text-2xl text-cyan-700"></i>
                                </div>
                                <h5 class="mb-2 text-surface-900 dark:text-surface-0">Fresh Design</h5>
                                <span class="text-surface-600 dark:text-surface-200">Semper risus in hendrerit.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0 animate-duration-1000 animate-ease-in-out" v-animateonscroll="{ enterClass: 'animate-flipup', leaveClass: 'animate-fadeout' }">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-indigo-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-map !text-2xl text-indigo-700"></i>
                                </div>
                                <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Well Documented</div>
                                <span class="text-surface-600 dark:text-surface-200">Non arcu risus quis varius quam quisque.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0 animate-duration-1000 animate-ease-in-out" v-animateonscroll="{ enterClass: 'animate-flipup', leaveClass: 'animate-fadeout' }">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(145, 210, 204, 0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-slate-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-id-card !text-2xl text-slate-700"></i>
                                </div>
                                <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Responsive Layout</div>
                                <span class="text-surface-600 dark:text-surface-200">Nulla malesuada pellentesque elit.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0 animate-duration-1000 animate-ease-in-out" v-animateonscroll="{ enterClass: 'animate-flipup', leaveClass: 'animate-fadeout' }">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2), rgba(160, 210, 250, 0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-orange-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-star !text-2xl text-orange-700"></i>
                                </div>
                                <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Clean Code</div>
                                <span class="text-surface-600 dark:text-surface-200">Condimentum lacinia quis vel eros.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0 animate-duration-1000 animate-ease-in-out" v-animateonscroll="{ enterClass: 'animate-flipup', leaveClass: 'animate-fadeout' }">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-pink-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-moon !text-2xl text-pink-700"></i>
                                </div>
                                <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Dark Mode</div>
                                <span class="text-surface-600 dark:text-surface-200">Convallis tellus id interdum velit laoreet.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0 animate-duration-1000 animate-ease-in-out" v-animateonscroll="{ enterClass: 'animate-flipup', leaveClass: 'animate-fadeout' }">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-teal-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-shopping-cart !text-2xl text-teal-700"></i>
                                </div>
                                <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Ready to Use</div>
                                <span class="text-surface-600 dark:text-surface-200">Mauris sit amet massa vitae.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0 animate-duration-1000 animate-ease-in-out" v-animateonscroll="{ enterClass: 'animate-flipup', leaveClass: 'animate-fadeout' }">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-blue-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-globe !text-2xl text-blue-700"></i>
                                </div>
                                <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Modern Practices</div>
                                <span class="text-surface-600 dark:text-surface-200">Elementum nibh tellus molestie nunc non.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0 animate-duration-1000 animate-ease-in-out" v-animateonscroll="{ enterClass: 'animate-flipup', leaveClass: 'animate-fadeout' }">
                        <div
                            style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))"
                        >
                            <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                                <div class="flex items-center justify-center bg-purple-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-eye !text-2xl text-purple-700"></i>
                                </div>
                                <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Privacy</div>
                                <span class="text-surface-600 dark:text-surface-200">Neque egestas congue quisque.</span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="col-span-12  p-2 md:p-20"
                        style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
                    >
                        <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
                            <div class="text-gray-900 mb-2 text-3xl font-semibold">Joséphine Miller</div>
                            <span class="text-gray-600 text-2xl">Peak Interactive</span>
                            <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6" style="max-width: 800px">
                                “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
                            </p>
                            <img src="/demo/images/landing/peak-logo.svg" class="mt-6" alt="Company logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-12 xl:col-span-12">
            <div id="highlights" class=" px-6 lg:px-20 mx-0 lg:mx-20 rounded-2xl animate-duration-1000 animate-ease-in-out" v-animateonscroll="{ enterClass: 'animate-scalein', leaveClass: 'animate-fadeout' }">
                <div class="text-center">
                    <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Powerful Everywhere</div>
                    <span class="text-muted-color text-2xl">Amet consectetur adipiscing elit...</span>
                </div>

                <div class="grid grid-cols-12 gap-4 mt-20 ">
                    <div class="flex justify-center col-span-12 lg:col-span-6 bg-purple-100 p-0 order-1 lg:order-none" style="border-radius: 8px">
                        <img src="/demo/images/landing/mockup.svg" class="w-11/12" alt="mockup mobile" />
                    </div>

                    <div class="col-span-12 lg:col-span-6 my-auto flex flex-col lg:items-end text-center lg:text-right gap-4" >
                        <div class="flex items-center justify-center bg-purple-200 self-center lg:self-end" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                            <i class="pi pi-fw pi-mobile !text-4xl text-purple-700"></i>
                        </div>
                        <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">Congue Quisque Egestas</div>
                        <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal ml-0 md:ml-2" style="max-width: 650px"
                            >Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.p-carousel-indicator-list {
    display: none !important;
}
.p-splitter{
    background:none !important;
}
.animate-fadeinleft {
    animation: fadeInLeft 3s ease-in-out forwards !important;
}
</style>
