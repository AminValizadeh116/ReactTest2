import { userShopingCartContext } from '../../context/shopingCartContext'
import ShopItem from '../../components/shop-item/ShopItem';


function ShoppingCart() {

  const {contextItems} = userShopingCartContext()

  return (
    <div className='flex flex-col gap-5'>
      {contextItems.map(item => <ShopItem {...item}/>)}
    </div>
  )
}

export default ShoppingCart
