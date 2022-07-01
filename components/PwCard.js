import { StyleSheet } from 'react-native';
import { useTheme } from '@rneui/themed';
import { Card, Button, Icon, Text } from '@rneui/base';

const source =
  "https://wallup.net/wp-content/uploads/2019/09/838858-cascada-bosque-naturaleza-paisaje-748x468.jpg";


export default function PwCard({ image, title }) {
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
        Voluptate voluptate id duis occaecat nulla laboris ex nulla nulla
        do sit. Nisi consequat do ea irure irure sit. Et amet aliqua sit
        sint cillum quis ipsum amet excepteur enim consectetur mollit
        eiusmod. Velit laborum id occaecat non culpa eiusmod. Nisi
        voluptate in proident dolor dolore elit est consequat nulla amet
        ullamco nisi. Anim enim commodo qui ex. Vendo Guanabana de la
        región. Lorem
      </Text>

      <Card.Divider style={styles.space} />

      <Button>
        <Icon name="info" color="white"></Icon>
        Más información
      </Button>
    </Card>
  );
}
