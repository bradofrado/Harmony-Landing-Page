export type IconComponent = (
    props: React.ComponentPropsWithoutRef<"svg">,
  ) => JSX.Element;
export const XMarkIcon: IconComponent = (props) => {
    return (
      <svg {...props} viewBox="30 25 60 60" fill="#11283B" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_466_808" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="7" y="0" width="106" height="106">
        <path d="M7.65576 52.8192L59.9959 0.47906L112.248 52.7309L59.9076 105.071L7.65576 52.8192Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_466_808)">
        <path d="M83.3691 26.6073L59.9541 50.0223L36.5786 26.6468C36.4879 26.5561 36.3896 26.4755 36.2837 26.405C36.1772 26.3338 36.0657 26.274 35.9472 26.2249C35.8293 26.1765 35.7077 26.1394 35.5822 26.1149C35.4568 26.0904 35.3307 26.0779 35.2027 26.0774C35.0747 26.0781 34.948 26.0902 34.8231 26.1155C34.6976 26.1402 34.5759 26.1775 34.4573 26.2268C34.3394 26.2754 34.2277 26.3354 34.1211 26.4068C34.0145 26.4781 33.9161 26.5589 33.8258 26.6491C33.7356 26.7394 33.6548 26.8378 33.5835 26.9444C33.5128 27.0504 33.4522 27.1627 33.4035 27.2806C33.3542 27.3992 33.3176 27.5203 33.2922 27.6464C33.2669 27.7713 33.2548 27.898 33.2547 28.0254C33.2546 28.154 33.2671 28.2801 33.2916 28.4055C33.3167 28.5303 33.3532 28.6526 33.4022 28.7699C33.4513 28.8883 33.5105 29.0005 33.5817 29.107C33.6522 29.2129 33.7328 29.3112 33.8235 29.4019L57.199 52.7774L33.784 76.1924C33.6938 76.2826 33.613 76.3811 33.5417 76.4877C33.471 76.5937 33.411 76.7066 33.3617 76.8239C33.3124 76.9425 33.2751 77.0642 33.2504 77.1897C33.2257 77.3152 33.213 77.4413 33.2129 77.5699C33.2128 77.6972 33.2253 77.8233 33.2498 77.9488C33.2742 78.0742 33.3113 78.1959 33.3604 78.3144C33.4089 78.4322 33.4693 78.5444 33.5398 78.6503C33.611 78.7568 33.6916 78.8551 33.7817 78.9451C33.8718 79.0352 33.9701 79.1159 34.0766 79.187C34.1824 79.2575 34.2946 79.318 34.4125 79.3664C34.531 79.4155 34.652 79.452 34.7781 79.4771C34.9035 79.5016 35.0296 79.5141 35.157 79.514C35.2856 79.5138 35.4117 79.5011 35.5372 79.4764C35.662 79.4511 35.7844 79.4144 35.903 79.3652C36.0203 79.3159 36.1332 79.2559 36.2392 79.1852C36.3458 79.1138 36.4442 79.0331 36.5344 78.9428L59.9494 55.5278L83.325 78.9033C83.4157 78.994 83.514 79.0747 83.6198 79.1452C83.7263 79.2163 83.8385 79.2755 83.957 79.3246C84.0742 79.3737 84.1965 79.4101 84.3213 79.4353C84.4468 79.4597 84.5729 79.4722 84.7015 79.4721C84.8288 79.472 84.9549 79.4593 85.0804 79.4346C85.2066 79.4093 85.3276 79.3726 85.4462 79.3233C85.5642 79.2747 85.6764 79.2141 85.7824 79.1434C85.889 79.072 85.9875 78.9912 86.0777 78.901C86.1679 78.8108 86.2487 78.7123 86.3201 78.6057C86.3914 78.4991 86.4514 78.3875 86.5 78.2695C86.5493 78.1509 86.5866 78.0292 86.6113 77.9037C86.636 77.7783 86.6487 77.6521 86.6495 77.5241C86.6489 77.3962 86.6364 77.2701 86.612 77.1446C86.5875 77.0192 86.5504 76.8975 86.5019 76.7797C86.4529 76.6612 86.393 76.5496 86.3219 76.4431C86.2514 76.3373 86.1707 76.239 86.08 76.1483L62.7045 52.7727L86.1195 29.3577C86.2104 29.2669 86.2912 29.1685 86.3619 29.0625C86.4332 28.9559 86.4926 28.8436 86.5425 28.7256C86.5911 28.6077 86.6278 28.4853 86.6531 28.3605C86.6778 28.235 86.6912 28.1082 86.6907 27.9803C86.6908 27.8529 86.6789 27.7262 86.6538 27.6014C86.6287 27.4753 86.5922 27.3543 86.5431 27.2358C86.4947 27.1179 86.4342 27.0057 86.3637 26.8999C86.2926 26.7934 86.2119 26.6951 86.1218 26.605C86.0318 26.5149 85.9335 26.4343 85.827 26.3631C85.7211 26.2926 85.6089 26.2322 85.4911 26.1837C85.3726 26.1346 85.2509 26.0975 85.1255 26.0731C85.0007 26.048 84.8739 26.0361 84.7466 26.0362C84.6186 26.0357 84.4918 26.049 84.3664 26.0737C84.2409 26.0984 84.1192 26.1357 84.0012 26.1844C83.8833 26.2343 83.771 26.2936 83.6644 26.365C83.5584 26.4357 83.46 26.5164 83.3691 26.6073Z"/>
        </g>
      </svg>
  
    );
};

interface BannerProps {
    children: React.ReactNode;
    onClose?: () => void;
}
export const Banner: React.FunctionComponent<BannerProps> = ({children, onClose}) => {
    return (
        <div className="flex justify-center items-center gap-x-6 bg-[#b4c6cf] px-6 py-2.5 sm:px-3.5">
            <div className="flex-1 text-sm leading-6">
                {children}
            </div>
            {onClose ? <div className="flex flex-1 justify-end">
                <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={onClose}>
                    <span className="sr-only">Dismiss</span>
                    <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
                </button>
            </div> : null}
        </div>
    )
}