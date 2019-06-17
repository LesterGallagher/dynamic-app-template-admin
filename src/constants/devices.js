export default [
    {
        className: 'iphone-x',
        isIPhoneX: true,
        platform: 'ios',
        label: 'IPhone X',
        options: []
    },
    {
        className: 'device-iphone-8 device-gold',
        isIPhoneX: false,
        platform: 'ios',
        options: [
            { label: 'Silver', className: 'device-silver' },
            { label: 'Gold', className: 'device-gold' },
            { label: 'Spacegray', className: 'device-spacegray' },
        ],
        label: 'Iphone 8'
    },
    {
        className: 'device-google-pixel-2-xl',
        isIPhoneX: false,
        platform: 'android',
        label: 'Google Pixel 2 XL',
        options: []
    },
    {
        className: 'device-google-pixel',
        isIPhoneX: false,
        platform: 'android',
        label: 'Google Pixel',
        options: [
            { label: 'Silver', className: 'device-silver' },
            { label: 'Black', className: 'device-black' },
            { label: 'Blue', className: 'device-blue' },
        ],
    },
    {
        className: 'device-galaxy-s8',
        isIPhoneX: false,
        platform: 'android',
        label: 'Samsung Galaxy S8',
        options: [
            { label: 'Black', className: 'device-black' },
            { label: 'Blue', className: 'device-blue' },
        ],
    },
    {
        className: 'device-ipad-pro',
        isIPhoneX: false,
        platform: 'ios',
        label: 'iPad Pro',
        options: [
            { label: 'Silver', className: 'device-silver' },
            { label: 'Gold', className: 'device-gold' },
            { label: 'Rosegold', className: 'device-rosegold' },
            { label: 'Spacegray', className: 'device-spacegray' },
        ],
    }
]