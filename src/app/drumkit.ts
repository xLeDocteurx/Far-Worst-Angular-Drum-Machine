export class DrumKit {
	author: string;
	name: string;
	samples: Sample[];
	// samples: string[];
};

export class Sample {
	name: string;
	path: string;
};

export const DRUMKITS: DrumKit[] = [
	{
		author: 'Akai',
		name: 'MPC2000 01',
		samples: [
			{name:'Hat Open', path:'../assets/akai/drumhits/HATS/HH_JHatOp1.wav'},
			{name:'Hat Closed', path:'../assets/akai/drumhits/HATS/HH_Hat1.wav'},
			{name:'Crash 1', path:'../assets/akai/drumhits/CYMBALS/HH_Crash8.wav'},
			{name:'Crash 2', path:'../assets/akai/drumhits/CYMBALS/HH_JRideHrd3.wav'},
			{name:'Kick 1', path:'../assets/akai/drumhits/KICKS/HH_JKick2.wav'},
			{name:'Kick 2', path:'../assets/akai/drumhits/KICKS/HH_Kick6.wav'},
			{name:'Snare', path:'../assets/akai/drumhits/SNARES/HH_JSnare32.wav'},
			{name:'Rim Shot', path:'../assets/akai/drumhits/SNARES/HH_Snare20.wav'},
		]
	},
	{
		author: 'Mad Zack',
		name: 'Bling It On',
		samples: [
			{name:'sympho 1', path:'../assets/factory_samples/bling_it_on/sympho_1.wav'},
			{name:'sympho 2', path:'../assets/factory_samples/bling_it_on/sympho_2.wav'},
			{name:'sympho 3', path:'../assets/factory_samples/bling_it_on/sympho_3.wav'},
			{name:'sympho 4', path:'../assets/factory_samples/bling_it_on/sympho_4.wav'},
			{name:'draw_swords', path:'../assets/factory_samples/bling_it_on/draw_swords.wav'},
			{name:'guido', path:'../assets/factory_samples/bling_it_on/guido.wav'},
			{name:'rubbish_hit', path:'../assets/factory_samples/bling_it_on/rubbish_hit.wav'},
			{name:'whipstitch', path:'../assets/factory_samples/bling_it_on/whipstitch.wav'},
			{name:'Bell 1', path:'../assets/factory_samples/bling_it_on/06.wav'},
			{name:'Bell 2', path:'../assets/factory_samples/bling_it_on/07.wav'},
			{name:'Bell 3', path:'../assets/factory_samples/bling_it_on/08.wav'},
			{name:'Bell 4', path:'../assets/factory_samples/bling_it_on/09.wav'},
			{name:'Kick 1', path:'../assets/factory_samples/bling_it_on/0.wav'},
			{name:'Kick 2', path:'../assets/factory_samples/bling_it_on/01.wav'},
			{name:'Snare', path:'../assets/factory_samples/bling_it_on/02.wav'},
			{name:'Clap', path:'../assets/factory_samples/bling_it_on/03.wav'},
		]
	},
	{
		author: 'LeDocteur',
		name: 'Next One',
		samples: [
			{name:'Piano 1', path:'../assets/factory_samples/next_one/06.wav'},
			{name:'Piano 2', path:'../assets/factory_samples/next_one/07.wav'},
			{name:'Sax Long', path:'../assets/factory_samples/next_one/08.wav'},
			{name:'Synth Rythm', path:'../assets/factory_samples/next_one/09.wav'},
			{name:'Bass 1', path:'../assets/factory_samples/next_one/bass_1.wav'},
			{name:'Bass 2', path:'../assets/factory_samples/next_one/bass_2.wav'},
			{name:'Bass 3', path:'../assets/factory_samples/next_one/bass_3.wav'},
			{name:'Whisper', path:'../assets/factory_samples/next_one/shot_calla_whisper.wav'},
			{name:'Klang', path:'../assets/factory_samples/next_one/garage_klang.wav'},
			{name:'Hit Hat', path:'../assets/factory_samples/next_one/hat_dud.wav'},
			{name:'Kick 2 Deep', path:'../assets/factory_samples/next_one/kick_so_deep_its_almost_not.wav'},
			{name:'Splash', path:'../assets/factory_samples/next_one/04.wav'},
			{name:'Kick', path:'../assets/factory_samples/next_one/0.wav'},
			{name:'Sub Kick', path:'../assets/factory_samples/next_one/01.wav'},
			{name:'Snare', path:'../assets/factory_samples/next_one/02.wav'},
			{name:'Clap', path:'../assets/factory_samples/next_one/03.wav'},
		]
	},
	{
		author: 'Mad Zack',
		name: 'Satin Charly',
		samples: [
			{name:'Trumpet 1', path:'../assets/factory_samples/Satin_Charly/trumpet1.wav'},
			{name:'Trumpet 2', path:'../assets/factory_samples/Satin_Charly/trumpet2.wav'},
			{name:'Trumpet 3', path:'../assets/factory_samples/Satin_Charly/trumpet3.wav'},
			{name:'Synth 1', path:'../assets/factory_samples/Satin_Charly/synth1.wav'},
			{name:'Chorus 1', path:'../assets/factory_samples/Satin_Charly/chorus1.wav'},
			{name:'Chorus 2', path:'../assets/factory_samples/Satin_Charly/chorus2.wav'},
			{name:'Bass 1', path:'../assets/factory_samples/Satin_Charly/bass1.wav'},
			{name:'Synth 2', path:'../assets/factory_samples/Satin_Charly/synth2.wav'},
			{name:'Noise scream', path:'../assets/factory_samples/Satin_Charly/00_noise_scream.wav'},
			{name:'Hit Hat', path:'../assets/factory_samples/Satin_Charly/hhc.wav'},
			{name:'Bass 2', path:'../assets/factory_samples/Satin_Charly/bass2.wav'},
			{name:'Vox Hit', path:'../assets/factory_samples/Satin_Charly/00_voxhit.wav'},
			{name:'Kick 1', path:'../assets/factory_samples/Satin_Charly/kick1.wav'},
			{name:'Kick 2', path:'../assets/factory_samples/Satin_Charly/kick2.wav'},
			{name:'Snare', path:'../assets/factory_samples/Satin_Charly/snare.wav'},
			{name:'Clap', path:'../assets/factory_samples/Satin_Charly/clap.wav'},
		]
	},
	{
		author: 'Mad Zack',
		name: 'Untersitzer',
		samples: [
			{name:'Kick 1', path:'../assets/factory_samples/Untersitzer/0.wav'},
			{name:'', path:'../assets/factory_samples/Untersitzer/01.wav'},
			{name:'', path:'../assets/factory_samples/Untersitzer/02.wav'},
			{name:'', path:'../assets/factory_samples/Untersitzer/03.wav'},
			{name:'', path:'../assets/factory_samples/Untersitzer/05.wav'},
			{name:'', path:'../assets/factory_samples/Untersitzer/06.wav'},
			{name:'', path:'../assets/factory_samples/Untersitzer/07.wav'},
			{name:'', path:'../assets/factory_samples/Untersitzer/08.wav'},
			{name:'', path:'../assets/factory_samples/Untersitzer/09.wav'},
			{name:'', path:'../assets/factory_samples/Untersitzer/09.wav'},
			{name:'', path:'../assets/factory_samples/Untersitzer/all_waves.wav'},
			{name:'', path:'../assets/factory_samples/Untersitzer/bass_heaval.wav'},
			{name:'', path:'../assets/factory_samples/Untersitzer/dry_clap.wav'},
			{name:'Jazz 1', path:'../assets/factory_samples/Untersitzer/jazz_times_1.wav'},
			{name:'Jazz 2', path:'../assets/factory_samples/Untersitzer/jazz_times_2.wav'},
			{name:'Sub Kick', path:'../assets/factory_samples/Untersitzer/sub_kick.wav'},
			{name:'Kick 2', path:'../assets/factory_samples/Untersitzer/tuddle.wav'},
			{name:'Turn It', path:'../assets/factory_samples/Untersitzer/turn_it.wav'},
		]
	}
];