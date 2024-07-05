declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.avif' {
    const value: string;
    export default value;
}
declare module '*.svg' {
    const content: any;
    export default content;
}
declare module '@fortawesome/free-solid-svg-icons' {
    const content: any;
    export = content;
}