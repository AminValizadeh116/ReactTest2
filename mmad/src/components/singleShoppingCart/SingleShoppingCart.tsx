import { Link } from 'react-router-dom'
import type { IProducts } from '../../types/services'

function SingleShoppingCart({id, image, title, price, description}: IProducts) {
  return (
    <Link
              key={id}
              to={`/ReactTest2/store/${id}`}
              className="col-span-1 rounded shadow cursor-pointer"
            >
              <img className="h-80 max-sm:h-50" src={image} alt="" />
              <div className="flex justify-between pb-2 px-7 font-bold">
                <span className="w-40 line-clamp-1">{title}</span>
                <span>{price} $</span>
              </div>
              <div className="pb-4 px-5">
                <p className="line-clamp-2">{description}</p>
              </div>
            </Link>
  )
}

export default SingleShoppingCart
