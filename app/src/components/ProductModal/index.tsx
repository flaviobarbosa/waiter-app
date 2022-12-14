import { FlatList, Modal } from 'react-native';
import { Product } from '../../types/Product';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { Image,
  CloseButton,
  Header,
  ModalBody,
  IngredientsContainer,
  Ingredient,
  Footer,
  FooterContainer,
  PriceContainer
} from './styles';

interface ProductModalProps {
  visible: boolean;
  onCLose: () => void;
  product: null | Product;
}

export function ProductModal({ visible, onCLose, product }: ProductModalProps) {

  if (!product) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onCLose}
    >
      <Image
        source={{
          uri: `https://localhost:3001/uploads/${product.imagePath}`
        }}>

        <CloseButton onPress={onCLose}>
          <Close></Close>
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight='600'>{ product.name }</Text>
          <Text size={16} color='#666' style={{marginTop: 8}}>{ product.description }</Text>
        </Header>

        {
          product.ingredients.length > 0 &&
          <IngredientsContainer>
            <Text size={16} weight='600' color='#666'>Ingredients</Text>

            <FlatList
              data={product.ingredients}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}
              style={{ marginTop: 16 }}
              renderItem={({item: ingredient}) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text size={14} color='#666' style={{marginLeft: 20}}>{ingredient.name}</Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        }
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color='#666'>Preço</Text>
            <Text size={20} weight='600'>{ formatCurrency(product.price) }</Text>
          </PriceContainer>

          <Button onPress={() => alert('adicionar ao pedido')}>
            Adicionar ao pedido
          </Button>
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
