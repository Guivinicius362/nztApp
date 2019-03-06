import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { EventCard } from '../../../components';

class Feed extends Component {
	render() {
		return (
			<FlatList
				data={[
					{
						key: '0',
						url:
							'https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.0-9/53142642_1350715741749718_3815629279111151616_n.jpg?_nc_cat=102&_nc_ht=scontent.fcpq14-1.fna&oh=87ad7ce975650fcb607cb9fb0c68caac&oe=5D166443',
						desc:
							'Eai gente ! Como voc\u00EAs est\u00E3o ??\r\nPor termos nosso acampa come\u00E7ando S\u00E1bado , ent\u00E3o N\u00C3O ter\u00E1 culto nesse dia!!\r\nE esperamos todos voc\u00EAs com a gente no acampa...',
					},
					{
						key: '1',
						url:
							'https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.0-9/53324229_1350587908429168_239001430940188672_n.jpg?_nc_cat=105&_nc_ht=scontent.fcpq14-1.fna&oh=24fd5c29fe649821cb3744111905c5d2&oe=5CE5EBEA',
						desc:
							'É AMANHÃ!!! Uhuul\nSó pra relembrar :\n-temos vagas para ônibus $20,00\n-check in igreja 7h\n-check Maanaim 8h',
					},
					{
						key: '2',
						url:
							'https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.0-9/53283446_1350206901800602_8492057338205700096_n.jpg?_nc_cat=107&_nc_ht=scontent.fcpq14-1.fna&oh=092539e14b851fda8e13028c0fa4d32a&oe=5CE2B753',
						desc:
							'FIQUE ATENTO AOS HORÁRIOS!!!\n—————————————————\nCheck in Igreja 7h\nCheck in Maanaim 8h\nCheck out igreja e Maanaim 9:30h',
					},
					{
						key: '3',
						url:
							'https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.0-9/52770520_1349890475165578_3938508353579253760_n.jpg?_nc_cat=111&_nc_ht=scontent.fcpq14-1.fna&oh=92ee95d9008037d17f49d6654502fc3d&oe=5CDD851F',
						desc:
							'Faltam APENAS 2 DIAS !! Só pra relembrar :\n- estaremos fazendo inscrições hoje dia 28/02\n-temos vagas para ônibus $20,00\n-check in igreja 7h\n-check Maanaim 8h',
					},
					{
						key: '4',
						url:
							'https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.0-9/53165053_1349170141904278_8355857272345198592_n.jpg?_nc_cat=111&_nc_ht=scontent.fcpq14-1.fna&oh=15a99aefb3cfa23490e14e2687c483ba&oe=5CE9C6CE',
						desc:
							'\r\nFaltam APENAS 3 DIAS !! S\u00F3 pra relembrar :\r\n- estaremos fazendo inscri\u00E7\u00F5es na quinta dia 28/02\r\n-temos vagas para \u00F4nibus $20,00\r\n-check in igreja 7h\r\n-check Maanaim 8h',
					},
					{
						key: '5',
						url:
							'https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.0-9/52723205_1348712395283386_7791158167722786816_n.jpg?_nc_cat=106&_nc_ht=scontent.fcpq14-1.fna&oh=f656421bddda89380a893809cb4d0c76&oe=5D17C121',
						desc:
							'\r\nFIQUE ATENTO :\r\n\r\n-check in igreja 7h.\r\n-check in Maanaim 8h.\r\n-check out Igreja e Maanaim 9:30h.\r\n-H\u00E1 POUCAS VAGAS e estaremos fazendo hoje ap\u00F3s o culto das 19:30 e quinta ap\u00F3s o culto das 19:30.',
					},
					{
						key: '6',
						url:
							'https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.0-9/53110803_1348409561980336_2160844432264396800_n.jpg?_nc_cat=102&_nc_ht=scontent.fcpq14-1.fna&oh=72f64205b6c4eab91fff3d2879dfcac3&oe=5CE7BBD4	',
						desc:
							'Faltam APENAS 4 DIAS !! S\u00F3 pra relembrar :\r\n- estaremos fazendo inscri\u00E7\u00F5es nesta ter\u00E7a (26) e quinta (28)\r\n-temos vagas para \u00F4nibus $20,00\r\n-check in igreja 7h\r\n-check Maanaim 8h',
					},
					{
						key: '7',
						url:
							'https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.0-9/53055645_1347943458693613_3766516302311587840_n.jpg?_nc_cat=111&_nc_ht=scontent.fcpq14-1.fna&oh=f031680e3659a5f3fe9382e3634dee6e&oe=5D1BC6FE',
						desc:
							'inscri\u00E7\u00E3o, pois temos menos de 100 VAGAS!!\r\nEstaremos fazendo inscri\u00E7\u00F5es ap\u00F3s o culto de ter\u00E7a-feira e de quinta-feira, no valor de $320,00 e o \u00F4nibus $20,00.\r\n\r\nN\u00E3o deixe pra \u00FAltima hora.',
					},
					{
						key: '8',
						url:
							'https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.0-9/52602597_1347618512059441_1656018992814358528_n.jpg?_nc_cat=110&_nc_ht=scontent.fcpq14-1.fna&oh=c1c73ffaa0ed416fc079492d769e72a9&oe=5D13EC6A',
						desc:
							'Faltam APENAS 5 DIAS !! \r\n\r\nS\u00F3 pra relembrar :\r\n- estaremos fazendo inscri\u00E7\u00F5es na ter\u00E7a 26/03 e 28/03 \r\n- temos vagas para \u00F4nibus $20,00\r\n- check in igreja 7h\r\n-check Maanaim 8h',
					},
					{
						key: '9',
						url:
							'https://scontent.fcpq14-1.fna.fbcdn.net/v/t1.0-9/52601945_1346104002210892_4721168492898811904_n.jpg?_nc_cat=103&_nc_ht=scontent.fcpq14-1.fna&oh=32a9c82a2cd0bf3047358ae49e7b33a8&oe=5D20D754',
						desc:
							'N\u00E3o fez sua inscri\u00E7\u00E3o ainda ?? Aproveita que esse final de semana \u00E9 o \u00FAltimo !! Chama os amigos e corre fazer a inscri\u00E7\u00E3o!!\r\n#aguasprofundas #AP #aguasprofundas19',
					},
				]}
				renderItem={({ item }) => <EventCard url={item.url} text={item.desc} />}
			/>
		);
	}
}

export default Feed;
