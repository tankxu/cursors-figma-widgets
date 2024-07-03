const { widget } = figma
const { useSyncedState, usePropertyMenu, Frame, useEffect, SVG } = widget

interface CursorElement {
  [key: string]: {
    macOS: string;
  };
}
function CursorsWidget() {
  // const [os, setOs] = useSyncedState('os', 'macOS')
  const [cursorState, setCursorState] = useSyncedState('cursorState', 'pointer')

  usePropertyMenu([
    // {
    //   itemType: 'dropdown',
    //   propertyName: 'os',
    //   tooltip: 'Operating System',
    //   options: [
    //     { option: 'macOS', label: 'macOS' },
    //     { option: 'mobile', label: 'iOS/Android' },
    //   ],
    //   selectedOption: os,
    // },
    {
      itemType: 'dropdown',
      propertyName: 'cursorState',
      tooltip: 'Cursor State',
      options: [
        { option: 'default', label: 'Default' },
        { option: 'pointer', label: 'Pointer' },
        { option: 'grab', label: 'Grab' },
        { option: 'grabbing', label: 'Grabbing' },
        { option: 'text', label: 'Text' },
        { option: 'move', label: 'Move' },
        { option: 'progress', label: 'Progress' },
        { option: 'notallowed', label: 'Not Allowed' },
        { option: 'colresize', label: 'Col Resize' },
        { option: 'rowresize', label: 'Row Resize' },
        { option: 'help', label: 'Help' },
        { option: 'input', label: 'Input' },
        { option: 'touch', label: 'Touch' },
      ],
      selectedOption: cursorState,
    },
  ], (event: WidgetPropertyEvent) => {
    // Assuming WidgetPropertyEvent has properties named propertyName and value
    const { propertyName, propertyValue } = event;

    // if (propertyName === 'os') {
    //   setOs(String(propertyValue));
    // } else if (propertyName === 'cursorState') {
    //   setCursorState(String(propertyValue));
    // }
    if (propertyName === 'cursorState') {
      setCursorState(String(propertyValue));
    }
  });

  useEffect(() => {
    // This function should insert the cursor layer based on the os and cursorState.
    // You need to replace this with your actual implementation to insert the cursor SVG or Figma layer.
  })


  // Cursors SVG elements array
  const cursorsElement: CursorElement = {
    default: {
      macOS: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g filter="url(#a)"><path fill="#fff" d="M15.923 18.03c.176.42.007 2.015-.923 2.384-.93.37-2.118 0-2.118 0l-2.156-4.312L7 19.828V3l11.414 11.414h-4.253c.21.4 1.54 3.08 1.762 3.616Z"/><path fill="#000" fill-rule="evenodd" d="M8 5.414v12l3-3 2.5 5s.676.216 1 0c.324-.216.646-.65.5-1-.688-1.65-2.5-5-2.5-5H16l-8-8Z" clip-rule="evenodd"/></g><defs><filter id="a" width="27.6" height="27.6" x="-1.8" y="-.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation=".9"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_122"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_2_122" result="shape"/></filter></defs></svg>`,
    },
    pointer: {
      macOS: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g filter="url(#a)"><path fill="#fff" d="M8.27 16.28c-.28-.36-.63-1.09-1.24-2-.35-.5-1.21-1.45-1.47-1.94a1.26 1.26 0 0 1-.15-1 1.32 1.32 0 0 1 1.43-1c.51.103.98.353 1.35.72.258.243.496.507.71.79.16.2.2.28.38.51.18.23.3.46.21.12-.07-.5-.19-1.34-.36-2.09-.13-.57-.16-.66-.28-1.09-.12-.43-.19-.79-.32-1.28a14.163 14.163 0 0 1-.28-1.46 2.82 2.82 0 0 1 .26-1.85 1.19 1.19 0 0 1 1.3-.22c.44.325.77.78.94 1.3.262.64.437 1.313.52 2 .16 1 .47 2.46.48 2.76 0-.37-.07-1.15 0-1.5a1.07 1.07 0 0 1 .67-.8 2 2 0 0 1 .92-.06c.31.065.585.243.77.5.232.583.36 1.203.38 1.83a6.73 6.73 0 0 1 .28-1.62 1.24 1.24 0 0 1 .69-.48c.33-.06.67-.06 1 0 .271.09.508.261.68.49.212.53.34 1.09.38 1.66 0 .14.07-.39.29-.74a1.002 1.002 0 1 1 1.9.64v2.26a11.74 11.74 0 0 1-.24 1.74 5.908 5.908 0 0 1-.72 1.43 7.214 7.214 0 0 0-1.19 1.81 4.004 4.004 0 0 0-.1 1c-.001.31.04.62.12.92a5.853 5.853 0 0 1-1.23 0c-.39-.06-.87-.84-1-1.08a.38.38 0 0 0-.68 0c-.22.38-.71 1.07-1.05 1.11-.67.08-2.05 0-3.14 0 0 0 .18-1-.23-1.36-.41-.36-.83-.78-1.14-1.06l-.84-.96Z"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".75" d="M8.27 16.28c-.28-.36-.63-1.09-1.24-2-.35-.5-1.21-1.45-1.47-1.94a1.26 1.26 0 0 1-.15-1 1.32 1.32 0 0 1 1.43-1c.51.103.98.353 1.35.72.258.243.496.507.71.79.16.2.2.28.38.51.18.23.3.46.21.12-.07-.5-.19-1.34-.36-2.09-.13-.57-.16-.66-.28-1.09-.12-.43-.19-.79-.32-1.28a14.163 14.163 0 0 1-.28-1.46 2.82 2.82 0 0 1 .26-1.85 1.19 1.19 0 0 1 1.3-.22c.44.325.77.78.94 1.3.262.64.437 1.313.52 2 .16 1 .47 2.46.48 2.76 0-.37-.07-1.15 0-1.5a1.07 1.07 0 0 1 .67-.8 2 2 0 0 1 .92-.06c.31.065.585.243.77.5.232.583.36 1.203.38 1.83a6.73 6.73 0 0 1 .28-1.62 1.24 1.24 0 0 1 .69-.48c.33-.06.67-.06 1 0 .271.09.508.261.68.49.212.53.34 1.09.38 1.66 0 .14.07-.39.29-.74a1.002 1.002 0 1 1 1.9.64v2.26a11.74 11.74 0 0 1-.24 1.74 5.908 5.908 0 0 1-.72 1.43 7.21 7.21 0 0 0-1.19 1.81 4.004 4.004 0 0 0-.1 1c-.001.31.04.62.12.92a5.853 5.853 0 0 1-1.23 0c-.39-.06-.87-.84-1-1.08a.38.38 0 0 0-.68 0c-.22.38-.71 1.07-1.05 1.11-.67.08-2.05 0-3.14 0 0 0 .18-1-.23-1.36-.41-.36-.83-.78-1.14-1.06l-.84-.96Z" clip-rule="evenodd"/><path fill="#000" d="M16.75 16.826v-3.452a.375.375 0 0 0-.75 0v3.452a.375.375 0 0 0 .75 0ZM14.77 16.825l-.02-3.454a.374.374 0 0 0-.75.004l.02 3.454a.374.374 0 0 0 .75-.004ZM12 13.379l.02 3.446a.376.376 0 1 0 .75-.004l-.02-3.446a.376.376 0 1 0-.75.004Z"/></g><defs><filter id="a" width="27.6" height="27.6" x="-1.8" y="-.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation=".9"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_144"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_2_144" result="shape"/></filter></defs></svg>`,
    },
    grab: {
      macOS: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g filter="url(#a)"><path fill="#fff" d="M8.38 12.27c-.1-.37-.2-.85-.41-1.55-.21-.7-.34-.86-.47-1.23-.13-.37-.3-.72-.5-1.18-.183-.47-.337-.95-.46-1.44a1.43 1.43 0 0 1 .28-1.17 1.41 1.41 0 0 1 1.36-.35c.379.166.7.44.92.79.295.472.537.975.72 1.5.282.72.486 1.467.61 2.23l.09.45V9.16c0-1-.06-1.82 0-2.94 0-.13.06-.59.08-.72a1.19 1.19 0 0 1 .67-1c.445-.2.955-.2 1.4 0 .399.178.665.564.69 1 0 .11.09 1 .09 1.11V10.25a29 29 0 0 1 .34-3.94 1.49 1.49 0 0 1 .79-.93 1.37 1.37 0 0 1 1.4.24c.288.316.458.723.48 1.15V10.32c.09-.28.19-.54.27-.74.08-.2.24-.61.36-.86.122-.238.26-.469.41-.69a1.38 1.38 0 0 1 .67-.56 1 1 0 0 1 1.3.59c.06.364.06.736 0 1.1a9.342 9.342 0 0 1-.35 1.65c-.13.45-.27 1.23-.34 1.6-.07.37-.23 1.38-.36 1.82a5.913 5.913 0 0 1-.79 1.47 7.24 7.24 0 0 0-1.19 1.81 4.052 4.052 0 0 0-.1 1c-.002.31.039.62.12.92a5.8 5.8 0 0 1-1.23 0c-.39-.06-.87-.84-1-1.08a.38.38 0 0 0-.68 0c-.23.38-.71 1.07-1.05 1.11-.67.08-2.05 0-3.14 0 0 0 .19-1-.23-1.36-.42-.36-.83-.78-1.14-1.06l-.83-.92c-.28-.36-.63-1.09-1.24-2-.35-.5-1-1.09-1.28-1.58a1.75 1.75 0 0 1-.19-1.32 1.21 1.21 0 0 1 1.37-.86 2 2 0 0 1 1.24.54c.268.232.518.482.75.75.16.19.2.28.38.51.18.23.3.46.21.12"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".75" d="M8.38 12.27c-.1-.37-.2-.85-.41-1.55-.21-.7-.34-.86-.47-1.23-.13-.37-.3-.72-.5-1.18-.183-.47-.337-.95-.46-1.44a1.43 1.43 0 0 1 .28-1.17 1.41 1.41 0 0 1 1.36-.35c.379.166.7.44.92.79.295.472.537.975.72 1.5.282.72.486 1.467.61 2.23l.09.45V9.16c0-1-.06-1.82 0-2.94 0-.13.06-.59.08-.72a1.19 1.19 0 0 1 .67-1c.445-.2.955-.2 1.4 0 .399.178.665.564.69 1 0 .11.09 1 .09 1.11V10.25a29 29 0 0 1 .34-3.94 1.49 1.49 0 0 1 .79-.93 1.37 1.37 0 0 1 1.4.24c.288.316.458.723.48 1.15V10.32c.09-.28.19-.54.27-.74.08-.2.24-.61.36-.86.122-.238.26-.469.41-.69a1.38 1.38 0 0 1 .67-.56 1 1 0 0 1 1.3.59c.06.364.06.736 0 1.1a9.342 9.342 0 0 1-.35 1.65c-.13.45-.27 1.23-.34 1.6-.07.37-.23 1.38-.36 1.82a5.913 5.913 0 0 1-.79 1.47 7.24 7.24 0 0 0-1.19 1.81 4.052 4.052 0 0 0-.1 1c-.002.31.039.62.12.92a5.8 5.8 0 0 1-1.23 0c-.39-.06-.87-.84-1-1.08a.38.38 0 0 0-.68 0c-.23.38-.71 1.07-1.05 1.11-.67.08-2.05 0-3.14 0 0 0 .19-1-.23-1.36-.42-.36-.83-.78-1.14-1.06l-.83-.92c-.28-.36-.63-1.09-1.24-2-.35-.5-1-1.09-1.28-1.58a1.75 1.75 0 0 1-.19-1.32 1.21 1.21 0 0 1 1.37-.86 2 2 0 0 1 1.24.54c.268.232.518.482.75.75.16.19.2.28.38.51.18.23.3.46.21.12"/><path fill="#000" d="M15.75 16.43v-3.45a.375.375 0 0 0-.75 0v3.45a.375.375 0 0 0 .75 0ZM13.76 16.43l-.01-3.453a.374.374 0 0 0-.75.002l.01 3.454a.374.374 0 0 0 .75-.002ZM11.005 12.98l.02 3.444c.001.21.17.377.377.376a.376.376 0 0 0 .373-.38l-.02-3.445a.376.376 0 0 0-.377-.375.376.376 0 0 0-.373.38Z"/></g><defs><filter id="a" width="27.6" height="27.6" x="-1.8" y="-.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation=".9"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_98"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_2_98" result="shape"/></filter></defs></svg>`
    },
    grabbing: {
      macOS: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g filter="url(#a)"><path fill="#fff" d="M8 7.15c.48-.18 1.43-.07 1.68.47s.4 1.24.41 1.07a6.39 6.39 0 0 1 .13-1.54 1.11 1.11 0 0 1 .69-.69 1.93 1.93 0 0 1 .92-.06c.31.064.585.242.77.5.234.583.366 1.202.39 1.83a6.543 6.543 0 0 1 .27-1.58 1.24 1.24 0 0 1 .69-.48c.33-.06.67-.06 1 0a1.4 1.4 0 0 1 .68.49c.212.53.34 1.09.38 1.66 0 .14.07-.39.29-.74a1.002 1.002 0 1 1 1.9.64v2.26a11.633 11.633 0 0 1-.24 1.74 5.872 5.872 0 0 1-.72 1.43 7.223 7.223 0 0 0-1.19 1.81 4.12 4.12 0 0 0-.1 1c-.001.31.04.62.12.92a5.786 5.786 0 0 1-1.23 0c-.39-.06-.87-.84-1-1.08a.38.38 0 0 0-.68 0c-.22.38-.71 1.07-1 1.11-.67.08-2.06 0-3.14 0 0 0 .19-1-.23-1.36-.42-.36-.83-.78-1.14-1.06l-.83-.92a4.45 4.45 0 0 1-1.24-2c-.21-.94-.19-1.39 0-1.77a1.5 1.5 0 0 1 .85-.65 1.8 1.8 0 0 1 .88.06c.196.082.366.217.49.39.23.31.31.46.21.12s-.32-.59-.43-1a4.58 4.58 0 0 1-.38-1.53 1.14 1.14 0 0 1 .83-1"/><path stroke="#000" stroke-linejoin="round" stroke-width=".75" d="M8 7.15c.48-.18 1.43-.07 1.68.47s.4 1.24.41 1.07a6.39 6.39 0 0 1 .13-1.54 1.11 1.11 0 0 1 .69-.69 1.93 1.93 0 0 1 .92-.06c.31.064.585.242.77.5.234.583.366 1.202.39 1.83a6.543 6.543 0 0 1 .27-1.58 1.24 1.24 0 0 1 .69-.48c.33-.06.67-.06 1 0a1.4 1.4 0 0 1 .68.49c.212.53.34 1.09.38 1.66 0 .14.07-.39.29-.74a1.002 1.002 0 1 1 1.9.64v2.26a11.633 11.633 0 0 1-.24 1.74 5.872 5.872 0 0 1-.72 1.43 7.223 7.223 0 0 0-1.19 1.81 4.12 4.12 0 0 0-.1 1c-.001.31.04.62.12.92a5.786 5.786 0 0 1-1.23 0c-.39-.06-.87-.84-1-1.08a.38.38 0 0 0-.68 0c-.22.38-.71 1.07-1 1.11-.67.08-2.06 0-3.14 0 0 0 .19-1-.23-1.36-.42-.36-.83-.78-1.14-1.06l-.83-.92a4.45 4.45 0 0 1-1.24-2c-.21-.94-.19-1.39 0-1.77a1.5 1.5 0 0 1 .85-.65 1.8 1.8 0 0 1 .88.06c.196.082.366.217.49.39.23.31.31.46.21.12s-.32-.59-.43-1a4.58 4.58 0 0 1-.38-1.53c.02-.48.34-.897.8-1.04Z" clip-rule="evenodd"/><path fill="#000" d="M15.75 14.826v-3.452a.375.375 0 0 0-.75 0v3.452a.375.375 0 0 0 .75 0ZM13.77 14.825l-.02-3.454a.374.374 0 0 0-.75.004l.02 3.454a.374.374 0 0 0 .75-.004ZM11 11.38l.02 3.444c.001.21.17.377.377.376a.376.376 0 0 0 .373-.38l-.02-3.444a.376.376 0 0 0-.377-.376.376.376 0 0 0-.373.38Z"/></g><defs><filter id="a" width="27.6" height="27.6" x="-1.8" y="-.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation=".9"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_92"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_2_92" result="shape"/></filter></defs></svg>`,
    },
    text: {
      macOS: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g filter="url(#a)"><path fill="#000" stroke="#fff" d="M13.451 11.022h-.5V6.503c.175-.382.431-.722.752-.996.204-.147.452-.28.718-.38.28-.047.629-.07.978-.047l.499.031.031-.499.063-.998.03-.499-.498-.031a6.19 6.19 0 0 0-1.598.107l-.034.007-.032.011c-.538.187-.98.421-1.382.718l-.013.01-.012.01a5.127 5.127 0 0 0-.489.469 5.254 5.254 0 0 0-.426-.44l-.017-.016-.017-.013a4.41 4.41 0 0 0-1.397-.73l-.024-.008-.024-.005a6.178 6.178 0 0 0-1.662-.12l-.5.032.033.499.064.998.033.499.499-.032c.355-.023.711 0 1.06.067.205.068.438.188.65.346.29.274.547.635.725 1.041v4.488h-1v1.98h1v3.527a3.26 3.26 0 0 1-.758 1.07c-.177.128-.41.248-.66.33a4.22 4.22 0 0 1-1.017.055l-.499-.033-.032.5-.065.997-.033.5.5.032a6.158 6.158 0 0 0 1.611-.108l.024-.005.023-.007a4.388 4.388 0 0 0 1.412-.713l.018-.013.017-.016c.167-.153.322-.313.466-.48.147.16.305.311.472.451l.011.01.012.008a5.08 5.08 0 0 0 1.332.716l.03.011.032.007a6.105 6.105 0 0 0 1.66.14l.498-.028-.027-.5-.055-.998-.027-.5-.5.028a4.146 4.146 0 0 1-1.032-.073 3.206 3.206 0 0 1-.686-.383 2.865 2.865 0 0 1-.737-.978v-3.547h1v-1.98h-.5Z"/></g><defs><filter id="a" width="27.6" height="27.6" x="-1.8" y="-.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation=".9"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_29"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_2_29" result="shape"/></filter></defs></svg>`,
    },
    move: {
      macOS: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g filter="url(#a)"><path fill="#fff" d="m12 4-8 8 5.22 5.22L12 20l8-8-8-8Zm-2 11H9v-1h1v1Zm0-5H9V9h1v1Zm5 5h-1v-1h1v1Zm-1-6h1v1h-1V9Z"/><path fill="#000" d="m18.55 11.98-2.56-2.81V11H7.98V9.17l-2.57 2.81 2.57 2.81v-1.81h8.01v1.81l2.56-2.81Z"/><path fill="#000" d="M12.97 11.99h.01v-4h1.81l-2.8-2.57-2.81 2.57h1.81v8H9.17l2.8 2.57 2.81-2.57h-1.81v-4Z"/></g><defs><filter id="a" width="27.6" height="27.6" x="-1.8" y="-.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation=".9"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_67"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_2_67" result="shape"/></filter></defs></svg>`,
    },
    progress: {
      macOS: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" fill="none"><g fill-rule="evenodd" clip-rule="evenodd" filter="url(#a)"><path fill="#4CC5FA" d="M23 25a9 9 0 0 1-9 9v-9H5a9 9 0 0 1 9-9v9h9Z"/><path fill="#3482E5" d="M5 25h9v-9a9 9 0 0 1 9 9h-9v9a9 9 0 0 1-9-9Z"/><path fill="#fff" d="M4 18.5v-16l11.6 11.608H8.554l-.152.124L4 18.5Z"/><path fill="#000" d="M5 4.8V16l2.969-2.87.16-.138 5.036.008L5 4.8Z"/></g><defs><filter id="a" width="31.6" height="43.6" x="-1.8" y="-.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation=".9"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_139"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_2_139" result="shape"/></filter></defs></svg>`
    },
    notallowed: {
      macOS: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" fill="none"><g filter="url(#a)"><path fill="#fff" d="M14 15.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5Zm-3.39 4a6.42 6.42 0 0 1 3.39-1 6.51 6.51 0 0 1 6.5 6.5 6.42 6.42 0 0 1-1 3.39l-8.89-8.89Zm3.39 12A6.51 6.51 0 0 1 7.5 25a6.42 6.42 0 0 1 1-3.42l8.94 8.94a6.42 6.42 0 0 1-3.42 1L14 31.5Z"/><path fill="url(#b)" fill-rule="evenodd" d="M5 25a9 9 0 1 0 18.001-.001A9 9 0 0 0 5 25Zm4.826-5.61A6.963 6.963 0 0 1 14 18a7 7 0 0 1 7 7c0 1.567-.52 3.008-1.39 4.174L9.826 19.39ZM7 25c0-1.578.529-3.029 1.409-4.199l9.79 9.79A6.96 6.96 0 0 1 14 32a7 7 0 0 1-7-7Z" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="M4 18.5v-16l11.6 11.608H8.554l-.152.124L4 18.5Z" clip-rule="evenodd"/><path fill="#000" fill-rule="evenodd" d="M5 4.8V16l2.969-2.87.16-.138 5.036.008L5 4.8Z" clip-rule="evenodd"/></g><defs><linearGradient id="b" x1="14" x2="14" y1="16" y2="34" gradientUnits="userSpaceOnUse"><stop stop-color="#F1F1F1"/><stop offset="1" stop-color="#D6D6D6"/></linearGradient><filter id="a" width="31.6" height="43.6" x="-1.8" y="-.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation=".9"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_117"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_2_117" result="shape"/></filter></defs></svg>`
    },
    colresize: {
      macOS: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g filter="url(#a)"><path fill="#fff" d="M10 4v6.01H8.98V6.54L3 12.01l5.98 5.46v-3.48H10V20h3.98v-6.01h1.06v3.47L21 11.99l-5.96-5.46V10h-1.06V4H10Z"/><path fill="#000" d="m19.34 11.99-3.32-3.22v2.25H13V5.06h-.02v-.02h-1.94v6H7.98V8.76l-3.32 3.25 3.32 3.22v-2.25h3.06v6H13v-6h3.02v2.26l3.32-3.25Z"/></g><defs><filter id="a" width="27.6" height="27.6" x="-1.8" y="-.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation=".9"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_34"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_2_34" result="shape"/></filter></defs></svg>`
    },
    rowresize: {
      macOS: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g filter="url(#a)"><path fill="#fff" d="M11.99 3 6.53 8.96H10V10H4v3.98h6v1.06H6.54L12.01 21l5.46-5.96h-3.48v-1.06H20V10h-6.01V8.96h3.47L11.99 3Z"/><path fill="#000" d="M18.96 11.02h-5.98V7.98h2.26l-3.25-3.32-3.22 3.32h2.25v3.04h-6v1.96h6.02v3.04H8.76l3.25 3.32 3.22-3.32h-2.25v-3.04h6v-1.96h-.02Z"/></g><defs><filter id="a" width="27.6" height="27.6" x="-1.8" y="-.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation=".9"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_31"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_2_31" result="shape"/></filter></defs></svg>`
    },
    help: {
      macOS: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g filter="url(#a)"><path fill="#fff" d="m8.675 5.1.047-.036a5.744 5.744 0 0 1 3.193-1.062c1.411-.093 2.793.437 3.71 1.384.948.8 1.452 2.008 1.355 3.16a4.025 4.025 0 0 1-.826 2.447 6.63 6.63 0 0 1-1.304 1.224l-.544.44a.86.86 0 0 0-.262.333c-.06.145-.053.38-.044.574v1.046h-4l-.018-.933a8.445 8.445 0 0 1 .13-2.125c.097-.383.297-.703.59-1.007.198-.206.346-.329.818-.7l.597-.47c.16-.118.303-.254.38-.344a.983.983 0 0 0 .173-.456c.003-.125-.038-.248-.16-.402-.12-.172-.325-.264-.595-.235a.985.985 0 0 0-.642.28 1.19 1.19 0 0 0-.293.75l-.027.972H7.058l-.075-.919A4.55 4.55 0 0 1 8.675 5.1Z"/><path fill="#fff" d="M14 14v4h-4v-4h4Z"/><path fill="#000" d="M13 15h-2v2h2v-2ZM9.3 5.88A4.79 4.79 0 0 1 11.98 5a3.84 3.84 0 0 1 3 1.15 2.84 2.84 0 0 1 1 2.4 3 3 0 0 1-.6 1.81 5.84 5.84 0 0 1-1.16 1.08l-.53.43a1.87 1.87 0 0 0-.6.82c-.064.19-.104.609-.09.92h-2a7.4 7.4 0 0 1 .08-1.81c.11-.43.5-.73 1.06-1.17l.57-.45c.227-.167.432-.362.61-.58a2 2 0 0 0 .35-1 1.53 1.53 0 0 0-.34-1 1.57 1.57 0 0 0-1.47-.66 2 2 0 0 0-1.34.62 2.19 2.19 0 0 0-.54 1.38h-2a3.55 3.55 0 0 1 1.25-3"/></g><defs><filter id="a" width="27.6" height="27.6" x="-1.8" y="-.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation=".9"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_134"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_2_134" result="shape"/></filter></defs></svg>`
    },
    input: {
      macOS: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28" height="25" fill="none"><g filter="url(#a)"><mask id="c" width="24" height="20" x="2" y="2" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="url(#b)" d="M2 2h24v20H2z"/></mask><g mask="url(#c)"><path fill="#1865F2" d="M2 0h24v24H2z"/></g></g><defs><pattern id="b" width="1" height="1" patternContentUnits="objectBoundingBox"><use xlink:href="#d" transform="matrix(.04167 0 0 .05 0 -.1)"/></pattern><filter id="a" width="27.6" height="27.6" x=".2" y="-.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="1"/><feGaussianBlur stdDeviation=".9"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.65 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_2_104"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_2_104" result="shape"/></filter><image xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAOElEQVRIS2NkIA38hypnJFYb0QqhBo5aQDBkR4NoNIgwQ2A0oxFMFaNBNBpEGCEwWpoSTBQjMIgArGcYGW6Q3QMAAAAASUVORK5CYII=" id="d" width="24" height="24"/></defs></svg>`
    },
    touch: {
      macOS: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" fill="#000" fill-opacity=".4"/><circle cx="12" cy="12" r="11" stroke="#fff" stroke-opacity=".5" stroke-width="2"/></svg>`,
    },
  }

  const getCursor = (cursor: string) => {
    return cursorsElement[cursor]["macOS"]
  }

  return (
    <SVG src={getCursor(cursorState)} />
  )
}

widget.register(CursorsWidget)


