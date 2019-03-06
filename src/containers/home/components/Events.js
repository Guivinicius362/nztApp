import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { EventCard } from '../../../components';

class Events extends Component {
  render() {
    return (
      <FlatList
        data={[
          {
            key: '1',
            desc:
              'Faltam APENAS 3 DIAS !! Só pra relembrar : - estaremos fazendo inscrições na quinta dia 28/02-temos vagas para ônibus $20,00-check Maanaim 8h',
            url:
              'https://scontent.fcpq4-1.fna.fbcdn.net/v/t1.0-9/53165053_1349170141904278_8355857272345198592_n.jpg?_nc_cat=111&_nc_ht=scontent.fcpq4-1.fna&oh=da61bf5df5a9b110eda704ebaafb8ca0&oe=5CE9C6CE',
          },
          {
            key: '2',
            desc:
              'FIQUE ATENTO -check in igreja 7h.-check in Maanaim 8h.-check out Igreja e Maanaim 9:30h.-Há POUCAS VAGAS e estaremos fazendo hoje após o culto das 19:30 e quinta após o culto das 19:30.',
            url:
              'https://scontent.fcpq4-1.fna.fbcdn.net/v/t1.0-9/52723205_1348712395283386_7791158167722786816_n.jpg?_nc_cat=106&_nc_ht=scontent.fcpq4-1.fna&oh=67b8a532ac4871cd7992ec61f88c2242&oe=5D17C121',
          },
          {
            key: '3',
            desc:
              'Faltam APENAS 4 DIAS !! Só pra relembrar : - estaremos fazendo inscrições nesta terça (26) e quinta (28) -temos vagas para ônibus $20,00 -check in igreja 7h -check Maanaim 8h',
            url:
              'https://scontent.fcpq4-1.fna.fbcdn.net/v/t1.0-9/53110803_1348409561980336_2160844432264396800_n.jpg?_nc_cat=102&_nc_ht=scontent.fcpq4-1.fna&oh=4282006b6527dd8e1aa063041503dff7&oe=5CE7BBD4',
          },
          {
            key: '4',
            desc:
              'Que ter uma transformação de vida e passar o carnaval na presença de Deus ?!Então CORRE fazer sua inscrição, pois temos menos de 100 VAGAS!! Estaremos fazendo inscrições após o culto de terça-feira e de quinta-feira, no valor de $320,00 e o ônibus $20,00.Não deixe pra última hora.',
            url:
              'https://scontent.fcpq4-1.fna.fbcdn.net/v/t1.0-9/53055645_1347943458693613_3766516302311587840_n.jpg?_nc_cat=111&_nc_ht=scontent.fcpq4-1.fna&oh=c21a1943ab17f14ba958307665a509f3&oe=5D1BC6FE',
          },
          {
            key: '5',
            desc:
              'Faltam APENAS 5 DIAS !!Só pra relembrar : - estaremos fazendo inscrições na terça 26/03 e 28/03 - temos vagas para ônibus $20,00 - check in igreja 7h -check Maanaim 8h',
            url:
              'https://scontent.fcpq4-1.fna.fbcdn.net/v/t1.0-9/52602597_1347618512059441_1656018992814358528_n.jpg?_nc_cat=110&_nc_ht=scontent.fcpq4-1.fna&oh=3688a0ceed919bf8ab8fdfbe3eaaefdc&oe=5CEC5F6A',
          },
          {
            key: '6',
            desc:
              'Não fez sua inscrição ainda ?? Aproveita que esse final de semana é o último !! Chama os amigos e corre fazer a inscrição!! #aguasprofundas #AP #aguasprofundas19',
            url:
              'https://scontent.fcpq4-1.fna.fbcdn.net/v/t1.0-9/52601945_1346104002210892_4721168492898811904_n.jpg?_nc_cat=103&_nc_ht=scontent.fcpq4-1.fna&oh=37acd715320e67363d078ecffa24f60b&oe=5D20D754',
          },
        ]}
        renderItem={({ item }) => (
          <EventCard key={item.key} desc={item.desc} url={item.url} />
        )}
      />
    );
  }
}
export default Events;
const styles = StyleSheet.create({
  container: {},
});
