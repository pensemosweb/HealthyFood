import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, createTheme } from "@rneui/themed";
import { Card, Text, Button, Icon } from "@rneui/base";

const theme = createTheme({
  lightColors: {},
  darkColors: {},
  innerSpace: {
    normal: '1rem'
  }
});

const source = 'https://wallup.net/wp-content/uploads/2019/09/838858-cascada-bosque-naturaleza-paisaje-748x468.jpg';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Card.Title>
          Publicación
        </Card.Title>
        
        <Card.Image
          source={{ uri: source }}
        >
        </Card.Image>
        
        <Text
        >
          Voluptate voluptate id duis occaecat nulla laboris ex nulla nulla do sit. Nisi consequat do ea irure irure sit. Et amet aliqua sit sint cillum quis ipsum amet excepteur enim consectetur mollit eiusmod. Velit laborum id occaecat non culpa eiusmod. Nisi voluptate in proident dolor dolore elit est consequat nulla amet ullamco nisi. Anim enim commodo qui ex.
          Vendo Guanabana de la región. Lorem
        </Text>

        <Card.Divider />
        
        <Button>
          <Icon
            name="home"
            color="white"
          ></Icon>
          Home
        </Button>
      </Card>

      <Card>
        <Card.Title>
          Publicación
        </Card.Title>
        
        <Card.Image
          source={{ uri: source }}
        >
        </Card.Image>
        
        <Text
        >
          Voluptate voluptate id duis occaecat nulla laboris ex nulla nulla do sit. Nisi consequat do ea irure irure sit. Et amet aliqua sit sint cillum quis ipsum amet excepteur enim consectetur mollit eiusmod. Velit laborum id occaecat non culpa eiusmod. Nisi voluptate in proident dolor dolore elit est consequat nulla amet ullamco nisi. Anim enim commodo qui ex.
          Vendo Guanabana de la región. Lorem
        </Text>

        <Card.Divider />
        
        <Button>
          <Icon
            name="home"
            color="white"
          ></Icon>
          Home
        </Button>
      </Card>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
