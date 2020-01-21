import * as posenet from '@tensorflow-models/posenet';

// export async function loadNeuralNetwork(): Promise<object> {
export async function loadNeuralNetwork() {

    // load options
    /*
    {
        architecture
        outputStride
        inputResolution
        multiplier
        quantBytes
    }*/

    try {
        return await posenet.load();
    } catch (e) {
        throw new Error(e)
    }
}

// export async function detectPose(canvas, video, network): Promise<object> {
export async function detectPose(network, video) {
    try {
        return await network.estimateSinglePose(video, {
            flipHorizontal: false
        });
    } catch(e) {
        throw new Error(e);
    }
}