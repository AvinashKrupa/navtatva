import React, { useEffect, useState } from "react";
import CategoryBox from "./CategoryBox";
import { filters } from "../../constants/sampleData";
import { TypeSenseService } from "../../../network/gateway/TypeSenseService";
import { NavItem } from "react-bootstrap";
import { useRouter } from "next/router";
import Permalink from "../../../utils/Permalink";

const CategoryFilter = (props: any) => {

  const route = useRouter();
  const { slug, id, q, category, color, price, brand, discount_percentage, material, occasion, print, page } = route.query;
  const [priceRangeValue, setPriceRangeValue] = useState<any>([0, 100000]);
  const [categories, setCategories] = useState<any>(null);
  const [colors, setColors] = useState<any>(null);
  const [brands, setBrands] = useState<any>(null);
  //const [discount_ranges, setDiscountRanges] = useState<any>(null)
  const [materials, setMaterials] = useState<any>(null);
  const [occasions, setOccasions] = useState<any>(null);
  const [prints, setPrints] = useState<any>(null);
  const onPriceValueChange = (values: any) => {
    setPriceRangeValue(values);
  };

  const [reset, setReset] = useState(false);
  const handleReset = () => {
    /* setReset(true)
      Object.entries(filters)?.map((item: any) => {
        item[1]?.data?.map((a: any) => {
          a.isSelected = false
        })
      })
  */
    route.replace(Permalink.ofShop())
  }
  useEffect(() => {
    getFacetAttributes();
    return () => { };
  }, [])

  const {
    //categories,
    //colors,
    //brands,
    discount_ranges,
    //materials,
    //occasions,
    //prints,
    prices,
  } = filters;

  function getFacetAttributes() {
    TypeSenseService.getInstance()
      .getFacetAttributes("filter")
      .then((response: any) => {
        if (response.data) {
          let filtersList = response?.data?.data;
          //console.log("filtersList",filtersList)
          filtersList.map((item: any) => {
            setFiltersData(item)
          })
        } else {
          console.log("ERROR:", response.data);
        }
      })
      .catch((error) => { });
  }

  function setFiltersData({ display_name, attribute_name, possible_values }: any) {

    switch (attribute_name) {
      case "category":
        setCategories({
          title: display_name,
          name: attribute_name,
          data: getFormatedData(possible_values, attribute_name)
        })
        break;
      case "color":
        setColors({
          title: display_name,
          name: attribute_name,
          data: getFormatedData(possible_values, attribute_name)
        })
        break;
      case "brand":
        setBrands({
          title: display_name,
          name: attribute_name,
          data: getFormatedData(possible_values, attribute_name)
        })
        break;
      /* case "discount_percentage":               
        setDiscountRanges({
          title: display_name,
          name: attribute_name,
          data: getFormatedData(possible_values, attribute_name)
        })
        break; */
      case "material":
        setMaterials({
          title: display_name,
          name: attribute_name,
          data: getFormatedData(possible_values, attribute_name)
        })
        break;
      case "occasion":
        setOccasions({
          title: display_name,
          name: attribute_name,
          data: getFormatedData(possible_values, attribute_name)
        })
        break;
      case "print":
        setPrints({
          title: display_name,
          name: attribute_name,
          data: getFormatedData(possible_values, attribute_name)
        })
        break;
      default:
        break;
    }
  }

  function getFormatedData(data: any, attribute_name: string) {
    let newObje: any = [];
    data?.map((item: any, index: number) => {
      newObje.push({
        id: index,
        name: attribute_name == "color" ? item.name : item,
        color_code: attribute_name == "color" ? item.code : item,
        isSelected: false
      })
    })
    return newObje;
  }


  return (
    <div className="col-lg-3 col-xl-2 mb-5 mb-lg-0">
      <div className="leftside-bar">
        <h6 className="main-title d-flex justify-content-between">Filters
          <div className="btn-reset" onClick={() => handleReset()}>
            <i className="fas fa-arrows-rotate fa-fw"></i> Reset All
          </div>
        </h6>
        <CategoryBox
          {...categories}
          reset={reset}
          setReset={setReset}
          selectedValue={category}
        />
        <CategoryBox
          {...colors}
          reset={reset}
          setReset={setReset}
          selectedValue={color}
        />
        <CategoryBox
          priceRangeValue={priceRangeValue}
          onPriceValueChange={onPriceValueChange}
          {...prices}
          reset={reset}
          setReset={setReset}
          selectedValue={price}
        />
        <CategoryBox
          {...brands}
          reset={reset}
          setReset={setReset}
          selectedValue={brand}
        />
        <CategoryBox
          {...discount_ranges}
          reset={reset}
          setReset={setReset}
          selectedValue={discount_percentage}
        />
        <CategoryBox
          {...materials}
          reset={reset}
          setReset={setReset}
          selectedValue={material}
        />
        <CategoryBox
          {...occasions}
          reset={reset}
          setReset={setReset}
          selectedValue={occasion}
        />
        <CategoryBox
          {...prints}
          reset={reset}
          setReset={setReset}
          selectedValue={print}
        />
      </div>
    </div>
  );
};

export default CategoryFilter;
