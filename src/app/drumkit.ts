export class DrumKit {
	author: string;
	name: string;
	// samples: Sample[];
	samples: string[];
};

export class Sample {
	name: string;
	path: string;
};

export const DRUMKITS: DrumKit[] = [
	{
		author: 'Akai',
		name: 'MPC2000 01',
		samples: []
	},
	{
		author: 'Mad Zack',
		name: 'Bling It On',
		samples: [
			'../assets/factory_samples/bling_it_on/0.wav',
			'../assets/factory_samples/bling_it_on/01.wav',
			'../assets/factory_samples/bling_it_on/02.wav',
			'../assets/factory_samples/bling_it_on/03.wav',
			'../assets/factory_samples/bling_it_on/06.wav',
			'../assets/factory_samples/bling_it_on/07.wav',
			'../assets/factory_samples/bling_it_on/08.wav',
			'../assets/factory_samples/bling_it_on/09.wav',
			'../assets/factory_samples/bling_it_on/draw_swords.wav',
			'../assets/factory_samples/bling_it_on/guido.wav',
			'../assets/factory_samples/bling_it_on/rubbish_hit.wav',
			'../assets/factory_samples/bling_it_on/sympho_1.wav',
			'../assets/factory_samples/bling_it_on/sympho_2.wav',
			'../assets/factory_samples/bling_it_on/sympho_3.wav',
			'../assets/factory_samples/bling_it_on/sympho_4.wav',
			'../assets/factory_samples/bling_it_on/whipstitch.wav'
		]
	},
	{
		author: 'Mad Zack',
		name: 'Next One',
		samples: [
			'../assets/factory_samples/next_one/0.wav',
			'../assets/factory_samples/next_one/01.wav',
			'../assets/factory_samples/next_one/02.wav',
			'../assets/factory_samples/next_one/03.wav',
			'../assets/factory_samples/next_one/04.wav',
			'../assets/factory_samples/next_one/06.wav',
			'../assets/factory_samples/next_one/07.wav',
			'../assets/factory_samples/next_one/08.wav',
			'../assets/factory_samples/next_one/09.wav',
			'../assets/factory_samples/next_one/bass_1.wav',
			'../assets/factory_samples/next_one/bass_2.wav',
			'../assets/factory_samples/next_one/bass_3.wav',
			'../assets/factory_samples/next_one/garage_klang.wav',
			'../assets/factory_samples/next_one/hat_dud.wav',
			'../assets/factory_samples/next_one/jaxx.wav',
			'../assets/factory_samples/next_one/kick_so_deep_its_almost_not.wav',
			'../assets/factory_samples/next_one/shot_calla_whisper.wav'
		]
	},
	{
		author: 'Mad Zack',
		name: 'Satin Charly',
		samples: [
			'../assets/factory_samples/Satin_Charly/00_noise.wav',
			'../assets/factory_samples/Satin_Charly/00_noise_scream.wav',
			'../assets/factory_samples/Satin_Charly/00_voxhit.wav',
			'../assets/factory_samples/Satin_Charly/bass1.wav',
			'../assets/factory_samples/Satin_Charly/bass2.wav',
			'../assets/factory_samples/Satin_Charly/chorus1.wav',
			'../assets/factory_samples/Satin_Charly/chorus2.wav',
			'../assets/factory_samples/Satin_Charly/clap.wav',
			'../assets/factory_samples/Satin_Charly/hhc.wav',
			'../assets/factory_samples/Satin_Charly/kick1.wav',
			'../assets/factory_samples/Satin_Charly/kick2.wav',
			'../assets/factory_samples/Satin_Charly/snare.wav',
			'../assets/factory_samples/Satin_Charly/synth1.wav',
			'../assets/factory_samples/Satin_Charly/synth2.wav',
			'../assets/factory_samples/Satin_Charly/trumpet1.wav',
			'../assets/factory_samples/Satin_Charly/trumpet2.wav',
			'../assets/factory_samples/Satin_Charly/trumpet3.wav'
		]
	},
	{
		author: 'Mad Zack',
		name: 'Untersitzer',
		samples: [
			'../assets/factory_samples/Untersitzer/0.wav',
			'../assets/factory_samples/Untersitzer/01.wav',
			'../assets/factory_samples/Untersitzer/02.wav',
			'../assets/factory_samples/Untersitzer/03.wav',
			'../assets/factory_samples/Untersitzer/05.wav',
			'../assets/factory_samples/Untersitzer/06.wav',
			'../assets/factory_samples/Untersitzer/07.wav',
			'../assets/factory_samples/Untersitzer/08.wav',
			'../assets/factory_samples/Untersitzer/09.wav',
			'../assets/factory_samples/Untersitzer/09.wav',
			'../assets/factory_samples/Untersitzer/all_waves.wav',
			'../assets/factory_samples/Untersitzer/bass_heaval.wav',
			'../assets/factory_samples/Untersitzer/dry_clap.wav',
			'../assets/factory_samples/Untersitzer/jazz_times_1.wav',
			'../assets/factory_samples/Untersitzer/jazz_times_2.wav',
			'../assets/factory_samples/Untersitzer/sub_kick.wav',
			'../assets/factory_samples/Untersitzer/tuddle.wav',
			'../assets/factory_samples/Untersitzer/turn_it.wav',
		]
	}
];