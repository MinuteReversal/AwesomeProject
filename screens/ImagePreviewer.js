import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import React from "react";

const images = [{
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

    // width: number
    // height: number
    // Optional, if you know the image size, you can set the optimization performance

    // You can pass props to <Image />.
}, {
    props: {
        // Or you can set source directory.
        url: '',
        source: require("../assets/images/1.jpg")
    }
}]

export default class App extends React.Component {
    render() {
        return (
            
                <ImageViewer imageUrls={images}/>
            
        )
    }
}