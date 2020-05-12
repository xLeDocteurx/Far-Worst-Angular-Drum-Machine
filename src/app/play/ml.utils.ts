import * as posenet from '@tensorflow-models/posenet';

export async function loadNeuralNetwork(): Promise<posenet.PoseNet> {

    // load options
    /*
    {
        architecture: MobileNetV1 or ResNet50
        outputStride: 32, 16, 8
        inputResolution: {width: number, height: number}
        multiplier: number
        quantBytes: number
    }*/

    const mobileNetOptions: posenet.ModelConfig = {
        architecture: 'MobileNetV1',
        outputStride: 16,
        inputResolution: { width: 640, height: 480 },
        multiplier: 0.75
    }

    const resNetOptions: posenet.ModelConfig = {
        architecture: 'ResNet50',
        outputStride: 32,
        inputResolution: { width: 257, height: 200 },
        quantBytes: 2
    }

    try {
        return await posenet.load();
    } catch (e) {
        throw new Error(e)
    }
}

// export async function detectPose(canvas, video, network): Promise<object> {
export async function detectPose(network, video): Promise<posenet.Pose> {
    try {
        return await network.estimateSinglePose(video, {
            flipHorizontal: false
        });
    } catch(e) {
        throw new Error(e);
    }
}