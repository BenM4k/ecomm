import PaginetedHome from '../../components/PaginatedHome/PaginetedHome';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../redux/slices/products/productSlice'
import { motion } from 'framer-motion';

const displayVariant = {
    start: { opacity: 0 },
    end: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

const HomeLatestsProducts = () => {
    const products = useSelector(selectAllProducts);
    const filteredProds = products?.slice(1, 9);
  return (
    <>
        <h2 className='title latest-title'>Latest <span>products</span></h2>
        <motion.div
          variants={displayVariant}
          initial='start'
          whileInView="end"
        >
          <PaginetedHome items={filteredProds} itemsPerPage={8} />
        </motion.div>
    </>
  )
}

export default HomeLatestsProducts;