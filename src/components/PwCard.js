import { StyleSheet } from 'react-native';
import { useTheme } from '@rneui/themed';
import { Card, Button, Icon, Text } from '@rneui/base';
import { useSelector } from 'react-redux';

const source =
  "https://wallup.net/wp-content/uploads/2019/09/838858-cascada-bosque-naturaleza-paisaje-748x468.jpg";


export default function PwCard({ image, title, content }) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    space: {
      marginBottom: theme.innerSpace.normal,
    },
  });

  return (
    <Card>
      <Card.Title>{title}</Card.Title>

      <Card.Image
        source={{ uri: image || source }}
        style={styles.space}
      ></Card.Image>

      <Text style={styles.space}>
       {content}
      </Text>

      <Card.Divider style={styles.space} />

      <Button>
        <Icon name="info" color="white"></Icon>
        Más información
      </Button>
    </Card>
  );
}
