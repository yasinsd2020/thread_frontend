import React, { use } from "react";
import NormalCard from "../components/commonComponents/cards/normalCard";
import Footer from "../components/commonComponents/footer/footer";
import SideBar from "../components/commonComponents/sideBar";
import Slider from 'rc-slider';
import CategorySideBar from "../components/commonComponents/CategorySideBar/CategorySideBar";
import { useEffect, useState } from 'react';
import { VscListFilter } from "react-icons/vsc";
import { BiSort } from "react-icons/bi";
import { MdViewCompact, MdApps } from "react-icons/md";
import { useDispatch,useSelector } from "react-redux";
import { getList_NewArivelAction, getAll_SingleProductAction } from "../redux/actions/products/productAction";
import { useRouter } from "next/router";
const SearchPage = () => {
  const router =useRouter()
  const [categoryShow, setCategoryShow] = useState(false)
  const [isFixed, setIsFixed] = useState(false);
  const [searchProd,setSearchProd] = useState(router.query.query_search)
  const [sliderValue, setSliderValue] = useState([400, 1000]);
  const [openBar, setOpenBar] = useState(false)
  const [isWidth1240, setIsWidth1240] = useState(false);
  const [listOfProduct,setListOfProduct] = useState()
  // const [catgorProd,setCategoryProd] = useState()

  const dispatch = useDispatch()
  const [gridShow,setGridShow] =useState({
    viewThree:false,
    viewFour:true
  })
  const [makeSortFixed,setMakeSortFixed] = useState(false)

  useEffect(() => {

    const handleResize = () => {
      setIsWidth1240(window.innerWidth <= 1024);
      if (window.innerWidth <= 1024) {

        setOpenBar(false)
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // temporary user id waiting for token
    // dispatch(getAll_SingleProductAction({user_id:9})) 
    window.addEventListener('scroll', () => {
      if(window.scrollY > 80){
        setMakeSortFixed(true)
      }else{
        setMakeSortFixed(false)
      }
    })

  },[])

  useEffect(()=>{
    setSearchProd(router.query.query_search)
    
  },[router])

// search keypress function
const handleKeyPress=(e)=>{
  if(e.key === 'Enter'){
    dispatch(getAll_SingleProductAction({
      keyword:searchProd
    })) 
    router.push({
      query:{
        query_search:searchProd
      }
  
    })
  }

}
const handleCategory=({id,code})=>{
  dispatch(getAll_SingleProductAction({
    category_id:id
  })) 
  router?.push({
    pathname:'',
    query:{
        path:code
    }
  })
}
useEffect(()=>{
  if(router?.query?.id !==undefined){
    dispatch(getAll_SingleProductAction({
      category_id:router?.query?.id
    }))
  }else if(router?.query.query_search !==undefined){
    dispatch(getAll_SingleProductAction({
      keyword:router.query.query_search
    })) 
  } 
  },[router])
const allProuct = useSelector((state)=>state.products)


  return (
    <>

      <div className={`flex py-2  ${isWidth1240 && 'flex-col '}`}>
        {isWidth1240 ? <div className={` p-2 pl-1 ${makeSortFixed ? "fixed top-0 left-0" : "relative"} bg-white flex justify-evenly w-full  `}
          style={{ zIndex: 500, }}

        >
          <div onClick={() => {
            setOpenBar(true)
          }} className="flex  border justify-center gap-1 items-center w-[100%] py-2  border-gray">
            <VscListFilter className="md:text-2xl text-md font-semibold" />
            <div className="uppercase md:text-lg text-sm font-normal"> Refine By</div> </div>
          {/* <div className="border border-gray gap-1 w-[45%] py-2 items-center flex justify-center">
            <BiSort className="md:text-2xl text-md font-light " />
            <div className="uppercase font-normal text-sm md:text-lg"> Sort</div>
          </div> */}

        </div>

          : <div className={`w-[20%] ${openBar ? "" : "pl-5"} lg:visible   "`}>
            <CategorySideBar searchProd ={searchProd} handleKeyPress={handleKeyPress} handleCategory={handleCategory}
            setSearchProd={setSearchProd}  openBar={openBar} setOpenBar={setOpenBar} categoryShow={categoryShow} isFixed={isFixed} sliderValue={sliderValue} setSliderValue={setSliderValue} setCategoryShow={setCategoryShow} setIsFixed={setIsFixed} />

          </div>
        }
        {openBar && <CategorySideBar
        rySideBar searchProd ={searchProd}  handleKeyPress={handleKeyPress} handleCategory={handleCategory}
            setSearchProd={setSearchProd}  setOpenBar={setOpenBar} openBar={openBar} categoryShow={categoryShow} isFixed={isFixed} sliderValue={sliderValue} setSliderValue={setSliderValue} setCategoryShow={setCategoryShow} setIsFixed={setIsFixed} />
        }

        <div className={`lg:ml-3 ${isWidth1240 ? 'w-full' : "w-[80%] "}`}>
       {!isWidth1240 && <div className={`${makeSortFixed ? "fixed" : "relative"} w-[100%] bg-white left-0 top-0`}
                      style={{ zIndex: 1000, }}

          >          
            <div className="flex pl-5 pr-7 py-3 relative items-center  gap-4 justify-between"
            >
            <div className="text-md uppercase font-normal">{`Home / ${router?.query?.path ?router?.query?.path:'All' }`}</div>
            <div className="flex justify-between  w-[13vw]">
              <div className="flex items-center gap-5">
              <MdApps className={`text-[1.7rem] cursor-pointer hover:text-black ${gridShow?.viewThree?'text-black':'text-gray-400 '}`} onClick={()=> setGridShow((prev)=>{
                  return {...prev,viewThree:true,
                  viewFour:false
                  }
                })} />
                <MdViewCompact className={`text-[2.1rem] cursor-pointer hover:text-black ${gridShow?.viewFour?'text-black':'text-gray-400 '}`} 
                onClick={()=>setGridShow((prev)=>{
                  return {...prev,viewFour:true,
                  viewThree:false
                  }
                })}
                />
              </div>
              {/* <div className=" gap-1 w-[5vw]   items-center flex justify-center">
                <div className="uppercase font-normal text-sm lg:text-md cursor-pointer md:text-lg"> Sort</div>
                <BiSort className="md:text-2xl text-sm font-light " />
              </div> */}
            </div>
          </div>
          </div> }   

          <div className={`mx-3 grid grid-cols-2 sm:grid-cols-2 gap-1 md:gap2 md:grid-cols-3 ${gridShow?.viewThree && 'xl:grid-cols-3'}  ${gridShow?.viewFour && 'xl:grid-cols-4'}  `}>
            <NormalCard data={allProuct?.products} />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPage;