function isMobile(): Boolean {
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    return isAndroid || isIOS;
}

async function setupCamera(videoElement): Promise<HTMLVideoElement> {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error('Browser API navigator.mediaDevices.getUserMedia not available');
    }
  
    const video = videoElement;
    video.width = video.clientWidth;
    video.height = video.clientHeight;
  
    const stream = await navigator.mediaDevices.getUserMedia({
      'audio': false,
      'video': {
        facingMode: 'user',
        width: isMobile() ? undefined : video.clientWidth,
        height: isMobile() ? undefined : video.clientHeight,
      },
    });
    video.srcObject = stream;
  
    return new Promise((resolve) => {
        video.onloadedmetadata = () => {
            resolve(video);
        };
    });
}

export async function loadVideo(videoElement): Promise<HTMLVideoElement> {
    try {
        const video = await setupCamera(videoElement);
        video.play();
    
        return video;
    } catch (e) {
        throw new Error(`This browser does not support video capture, or this device does not have a camera. ERROR: ${e}`);
    }
}