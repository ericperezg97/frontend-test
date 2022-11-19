interface Props {
 type: "wallet" | "bell" | "categories" | "coupons" | "customers" | "home" | "network" | "settings" | "shop" | "info" | "link" | "arrow" | "card" | "arrow-right"
 color: string
 className?: string
}
 
const Icon = ({ type, color, className:externalClassName="" }: Props) => {

 return (
  <div className={`Icon ${externalClassName}`}>
   {type === "wallet" &&
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" stroke={color} xmlns="http://www.w3.org/2000/svg">
     <path d="M3.75 2.3125H1.875C1.18437 2.3125 0.625 2.87187 0.625 3.5625C0.625 4.25313 1.18437 4.8125 1.875 4.8125" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M3.75 2.3125H1.875C1.18437 2.3125 0.625 2.87187 0.625 3.5625C0.625 4.25313 1.18437 4.8125 1.875 4.8125" stroke={color} stroke-opacity="0.2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M3.75 4.8125V1.0625H12.5V4.8125" stroke={color}stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M3.75 4.8125V1.0625H12.5V4.8125" stroke={color} stroke-opacity="0.2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M14.375 4.8125H1.875C1.18437 4.8125 0.625 4.25313 0.625 3.5625V12.9375C0.625 13.9731 1.46438 14.8125 2.5 14.8125H14.375V4.8125Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M14.375 4.8125H1.875C1.18437 4.8125 0.625 4.25313 0.625 3.5625V12.9375C0.625 13.9731 1.46438 14.8125 2.5 14.8125H14.375V4.8125Z" stroke={color} stroke-opacity="0.2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M10.625 11.0625C11.3154 11.0625 11.875 10.5029 11.875 9.8125C11.875 9.12214 11.3154 8.5625 10.625 8.5625C9.93464 8.5625 9.375 9.12214 9.375 9.8125C9.375 10.5029 9.93464 11.0625 10.625 11.0625Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M10.625 11.0625C11.3154 11.0625 11.875 10.5029 11.875 9.8125C11.875 9.12214 11.3154 8.5625 10.625 8.5625C9.93464 8.5625 9.375 9.12214 9.375 9.8125C9.375 10.5029 9.93464 11.0625 10.625 11.0625Z" stroke={color} stroke-opacity="0.2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
    </svg>
   }
   {type === "bell" &&
    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M11.875 6.9675V5.0925C11.875 3.93218 11.4141 2.81938 10.5936 1.99891C9.77312 1.17843 8.66032 0.717499 7.5 0.717499C6.33968 0.717499 5.22688 1.17843 4.40641 1.99891C3.58594 2.81938 3.125 3.93218 3.125 5.0925V6.9675C3.125 9.03 1.25 9.53 1.25 10.7175C1.25 11.78 3.6875 12.5925 7.5 12.5925C11.3125 12.5925 13.75 11.78 13.75 10.7175C13.75 9.53 11.875 9.03 11.875 6.9675Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M11.875 6.9675V5.0925C11.875 3.93218 11.4141 2.81938 10.5936 1.99891C9.77312 1.17843 8.66032 0.717499 7.5 0.717499C6.33968 0.717499 5.22688 1.17843 4.40641 1.99891C3.58594 2.81938 3.125 3.93218 3.125 5.0925V6.9675C3.125 9.03 1.25 9.53 1.25 10.7175C1.25 11.78 3.6875 12.5925 7.5 12.5925C11.3125 12.5925 13.75 11.78 13.75 10.7175C13.75 9.53 11.875 9.03 11.875 6.9675Z" stroke={color} stroke-opacity="0.2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M7.50001 13.8425C6.86814 13.8425 6.27439 13.8212 5.71564 13.78C5.83476 14.16 6.07207 14.492 6.39302 14.7278C6.71397 14.9635 7.10179 15.0906 7.50001 15.0906C7.89823 15.0906 8.28605 14.9635 8.607 14.7278C8.92795 14.492 9.16527 14.16 9.28439 13.78C8.72564 13.8212 8.13189 13.8425 7.50001 13.8425Z" fill={color}/>
     <path d="M7.50001 13.8425C6.86814 13.8425 6.27439 13.8212 5.71564 13.78C5.83476 14.16 6.07207 14.492 6.39302 14.7278C6.71397 14.9635 7.10179 15.0906 7.50001 15.0906C7.89823 15.0906 8.28605 14.9635 8.607 14.7278C8.92795 14.492 9.16527 14.16 9.28439 13.78C8.72564 13.8212 8.13189 13.8425 7.50001 13.8425Z" fill={color} fill-opacity="0.2"/>
    </svg>
   }
   {type === "categories" &&
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M3.75 14.25H0.75V17.25H3.75V14.25Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M10.5 7.5H7.5V10.5H10.5V7.5Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M3.75 7.5H0.75V10.5H3.75V7.5Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M10.5 0.75H7.5V3.75H10.5V0.75Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M3.75 0.75H0.75V3.75H3.75V0.75Z" stroke={color}stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M17.25 0.75H14.25V3.75H17.25V0.75Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M7.5 15.75H10.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M9 14.25V17.25" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M14.25 15.75H17.25" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M15.75 14.25V17.25" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M14.25 9H17.25" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M15.75 7.5V10.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
    </svg>
   }
   {type === "coupons" &&
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M15 7C15 5.725 15.975 4.75 17.25 4.75V1H0.75V4.75C2.025 4.75 3 5.725 3 7C3 8.275 2.025 9.25 0.75 9.25V13H17.25V9.25C15.975 9.25 15 8.275 15 7Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M11.25 4.75L6.75 9.25" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M7.125 5.5C7.74632 5.5 8.25 4.99632 8.25 4.375C8.25 3.75368 7.74632 3.25 7.125 3.25C6.50368 3.25 6 3.75368 6 4.375C6 4.99632 6.50368 5.5 7.125 5.5Z" fill={color}/>
     <path d="M10.875 10.75C11.4963 10.75 12 10.2463 12 9.625C12 9.00368 11.4963 8.5 10.875 8.5C10.2537 8.5 9.75 9.00368 9.75 9.625C9.75 10.2463 10.2537 10.75 10.875 10.75Z" fill={color}/>
    </svg>
   }
   {type === "customers" &&
    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M14.25 14.25H17.25V11.0078C17.2499 10.8579 17.2049 10.7115 17.1208 10.5874C17.0367 10.4634 16.9174 10.3674 16.7783 10.3118L13.9717 9.18675C13.8328 9.13125 13.7137 9.03546 13.6296 8.9117C13.5455 8.78794 13.5004 8.64186 13.5 8.49225V7.83375C13.9549 7.57271 14.333 7.19649 14.5963 6.74292C14.8596 6.28936 14.9989 5.77446 15 5.25V3.75C15.0001 3.22334 14.8616 2.70592 14.5983 2.24977C14.3351 1.79361 13.9564 1.41481 13.5003 1.15142C13.0442 0.888036 12.5268 0.749358 12.0002 0.749329C11.4735 0.749299 10.9561 0.887919 10.5 1.15125" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M10.7783 11.0618L7.97175 9.93675C7.83282 9.88124 7.71366 9.78546 7.62959 9.6617C7.54552 9.53794 7.50039 9.39186 7.5 9.24225V8.904C9.9525 8.57625 10.5 7.5 10.5 7.5C10.5 7.5 9 6 9 4.5C9 3.70435 8.68393 2.94129 8.12132 2.37868C7.55871 1.81607 6.79565 1.5 6 1.5C5.20435 1.5 4.44129 1.81607 3.87868 2.37868C3.31607 2.94129 3 3.70435 3 4.5C3 6 1.5 7.5 1.5 7.5C1.5 7.5 2.0475 8.57625 4.5 8.904V9.24225C4.49991 9.39212 4.45491 9.53852 4.37083 9.66257C4.28674 9.78663 4.16742 9.88265 4.02825 9.93825L1.22175 11.0632C1.08282 11.1188 0.963657 11.2145 0.879591 11.3383C0.795525 11.4621 0.750394 11.6081 0.75 11.7578V14.25H11.25V11.7578C11.2499 11.6079 11.2049 11.4615 11.1208 11.3374C11.0367 11.2134 10.9174 11.1174 10.7783 11.0618Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
    </svg>
   }
   {type === "home" &&
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M10 1L1.42859 7.85714V19H7.42859V13H12.5714V19H18.5714V7.85714L10 1Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
    </svg>
   }
   {type === "shop" &&
    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M3 9.25V16H15V9.25" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M3.00001 1L0.750006 4.75C0.748873 5.25577 0.918635 5.7471 1.23176 6.14429C1.54489 6.54148 1.98301 6.82124 2.47508 6.9382C2.96714 7.05516 3.48429 7.00246 3.94265 6.78864C4.401 6.57483 4.77369 6.21244 5.00026 5.76025C5.18511 6.13262 5.47026 6.44599 5.82359 6.66505C6.17692 6.88412 6.5844 7.00019 7.00013 7.00019C7.41586 7.00019 7.82334 6.88412 8.17667 6.66505C8.53 6.44599 8.81515 6.13262 9.00001 5.76025C9.18486 6.13262 9.47001 6.44599 9.82334 6.66505C10.1767 6.88412 10.5841 7.00019 10.9999 7.00019C11.4156 7.00019 11.8231 6.88412 12.1764 6.66505C12.5297 6.44599 12.8149 6.13262 12.9998 5.76025C13.2263 6.21244 13.599 6.57483 14.0574 6.78864C14.5157 7.00246 15.0329 7.05516 15.5249 6.9382C16.017 6.82124 16.4551 6.54148 16.7682 6.14429C17.0814 5.7471 17.2511 5.25577 17.25 4.75L15 1H3.00001Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M7.5 16V11.5H10.5V16" stroke={color} stroke-width="1.5" stroke-miterlimit="10"/>
    </svg>
   }
   {type === "network" &&
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M3.9675 7.5C3.7347 6.71658 3.68801 5.88962 3.83116 5.08498C3.97431 4.28033 4.30333 3.52022 4.79205 2.86516C5.28076 2.21009 5.91566 1.67818 6.64619 1.31175C7.37673 0.945332 8.18272 0.754524 9 0.754524C9.81728 0.754524 10.6233 0.945332 11.3538 1.31175C12.0843 1.67818 12.7192 2.21009 13.208 2.86516C13.6967 3.52022 14.0257 4.28033 14.1688 5.08498C14.312 5.88962 14.2653 6.71658 14.0325 7.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M9 8.25C10.2426 8.25 11.25 7.24264 11.25 6C11.25 4.75736 10.2426 3.75 9 3.75C7.75736 3.75 6.75 4.75736 6.75 6C6.75 7.24264 7.75736 8.25 9 8.25Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M9 17.25C9.82843 17.25 10.5 16.5784 10.5 15.75C10.5 14.9216 9.82843 14.25 9 14.25C8.17157 14.25 7.5 14.9216 7.5 15.75C7.5 16.5784 8.17157 17.25 9 17.25Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M3 17.25C3.82843 17.25 4.5 16.5784 4.5 15.75C4.5 14.9216 3.82843 14.25 3 14.25C2.17157 14.25 1.5 14.9216 1.5 15.75C1.5 16.5784 2.17157 17.25 3 17.25Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M15 17.25C15.8284 17.25 16.5 16.5784 16.5 15.75C16.5 14.9216 15.8284 14.25 15 14.25C14.1716 14.25 13.5 14.9216 13.5 15.75C13.5 16.5784 14.1716 17.25 15 17.25Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M9 14.25V11.25" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M3 14.25V12L5.25 10.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M15 14.25V12L12.75 10.5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
    </svg>
   }
   {type === "settings" &&
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M17.25 10.125V7.875L14.814 7.54275C14.6707 6.97103 14.4432 6.4238 14.139 5.919L15.627 3.9615L14.0385 2.37075L12.081 3.85875C11.5762 3.55451 11.029 3.32702 10.4572 3.18375L10.125 0.75H7.875L7.54275 3.186C6.97103 3.32927 6.4238 3.55676 5.919 3.861L3.9615 2.37075L2.37075 3.9615L3.85875 5.919C3.55451 6.4238 3.32702 6.97103 3.18375 7.54275L0.75 7.875V10.125L3.186 10.4572C3.32927 11.029 3.55676 11.5762 3.861 12.081L2.373 14.0385L3.96375 15.6293L5.92125 14.1412C6.42605 14.4455 6.97328 14.673 7.545 14.8162L7.875 17.25H10.125L10.4572 14.814C11.029 14.6707 11.5762 14.4432 12.081 14.139L14.0385 15.627L15.6293 14.0363L14.1412 12.0787C14.4455 11.574 14.673 11.0267 14.8162 10.455L17.25 10.125Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
    </svg>
   }
   {type === "info" &&
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M6.33334 4.16668H7.66668V5.50001H6.33334V4.16668ZM6.33334 6.83334H7.66668V10.8333H6.33334V6.83334ZM7.00001 0.833344C3.32001 0.833344 0.333344 3.82001 0.333344 7.50001C0.333344 11.18 3.32001 14.1667 7.00001 14.1667C10.68 14.1667 13.6667 11.18 13.6667 7.50001C13.6667 3.82001 10.68 0.833344 7.00001 0.833344ZM7.00001 12.8333C4.06001 12.8333 1.66668 10.44 1.66668 7.50001C1.66668 4.56001 4.06001 2.16668 7.00001 2.16668C9.94001 2.16668 12.3333 4.56001 12.3333 7.50001C12.3333 10.44 9.94001 12.8333 7.00001 12.8333Z" fill={color}/>
    </svg>
   }
   {type === "link" &&
   <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.875 3.75L8.48437 2.14062C9.06938 1.56967 9.85443 1.25006 10.6719 1.25006C11.4893 1.25006 12.2744 1.56967 12.8594 2.14062V2.14062C13.4303 2.72563 13.7499 3.51068 13.7499 4.32812C13.7499 5.14557 13.4303 5.93062 12.8594 6.51562L11.25 8.125" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
    <path d="M8.125 11.25L6.51562 12.8594C5.93062 13.4303 5.14557 13.7499 4.32812 13.7499C3.51068 13.7499 2.72563 13.4303 2.14062 12.8594V12.8594C1.56967 12.2744 1.25006 11.4893 1.25006 10.6719C1.25006 9.85443 1.56967 9.06938 2.14062 8.48437L3.75 6.875" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
    <path d="M5 10L10 5" stroke={color} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
   </svg> 
   }
   {type === "arrow" &&
    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.66668 0.5L11.1933 2.02667L7.94001 5.28L5.27334 2.61333L0.333344 7.56L1.27334 8.5L5.27334 4.5L7.94001 7.16667L12.14 2.97333L13.6667 4.5V0.5H9.66668Z" fill={color}/>
    </svg>
   }
   {type === "card" &&
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M11.6667 0.833344V8.33334H19.1667C19.1667 4.19084 15.8092 0.833344 11.6667 0.833344Z" stroke={color} stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
     <path d="M8.33334 4.16669C4.19084 4.16669 0.833336 7.52419 0.833336 11.6667C0.833336 15.8092 4.19084 19.1667 8.33334 19.1667C12.4758 19.1667 15.8333 15.8092 15.8333 11.6667H8.33334V4.16669Z" stroke={color} stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
    </svg>
   }
   {type === "arrow-right" &&
   <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.66668 0.5L0.726685 1.44L3.78002 4.5L0.726685 7.56L1.66668 8.5L5.66668 4.5L1.66668 0.5Z" fill={color}/>
   </svg>
   }
  </div>
 )
}
export default Icon
