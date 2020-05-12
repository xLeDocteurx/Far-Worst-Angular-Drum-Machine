function isMobile(): Boolean {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    return isAndroid || isIOS;
}

async function setupCamera(videoElement: HTMLVideoElement, width: number, height: number): Promise<HTMLVideoElement> {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error('Browser API navigator.mediaDevices.getUserMedia not available');
    }

    const video = videoElement;
    video.width = width;
    video.height = height;

    const stream = await navigator.mediaDevices.getUserMedia({
        'audio': false,
        'video': {
            facingMode: 'user',
            width: isMobile() ? undefined : video.width,
            height: isMobile() ? undefined : video.height,
        },
    });
    video.srcObject = stream;
  
    return new Promise((resolve) => {
        video.onloadedmetadata = () => {
            resolve(video);
        };
    });
}

export async function loadVideo(videoElement: HTMLVideoElement, width: number, height: number): Promise<HTMLVideoElement> {
    try {
        const video = await setupCamera(videoElement, width, height);
        video.play();
    
        return video;
    } catch (e) {
        throw new Error(`This browser does not support video capture, or this device does not have a camera. ERROR: ${e}`);
    }
}