import React, { useState, useEffect } from "react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import { connect } from "react-redux"

import axios from "../axios/axios"
import novaposhtaaxios from "../axios/novaposhta"
import * as actions from "../../state/actions/cart"

const CheckoutForm = props => {
  //Creating empty lists
  const [regions, setRegions] = useState([])
  const [cities, setCities] = useState([])
  const [postOffices, setPostOffices] = useState([])
  //Creating current items to filter lists
  const [currentRegion, setCurrentRegion] = useState("")
  const [currentCity, setCurrentCity] = useState("")
  //Creating filtered lists
  const [citiesFiltered, setCitiesFiltered] = useState([])
  const [postOfficesFiltered, setPostOfficesFiltered] = useState([])
  //Creating region centers
  const [regionCenterRef, setRegionCenterRef] = useState("")
  const [regionCenter, setRegionCenter] = useState({})
  //Requesting regions
  useEffect(() => {
    novaposhtaaxios({
      method: "post",
      url: "/Address/getAreas",
      headers: {
        "content-type": "application/json",
      },
      data: {
        modelName: "Address",
        calledMethod: "getAreas",
      },
    })
      .then(response => {
        setRegions(response.data.data)
      })
      .catch(error => console.log(error))
  }, [])
  //Requesting cities
  useEffect(() => {
    novaposhtaaxios({
      method: "post",
      url: "/AddressGeneral/getCities",
      headers: {
        "content-type": "application/json",
      },
      data: {
        modelName: "AddressGeneral",
        calledMethod: "getCities",
      },
    })
      .then(response => {
        setCities(response.data.data)
      })
      .catch(error => console.log(error))
  }, [])
  //Requesting post offices
  useEffect(() => {
    novaposhtaaxios({
      method: "post",
      url: "/Address/getWarehouses",
      headers: {
        "content-type": "application/json",
      },
      data: {
        modelName: "Address",
        calledMethod: "getWarehouses",
      },
    })
      .then(response => {
        setPostOffices(response.data.data)
      })
      .catch(error => console.log(error))
  }, [])
  //Filtering cities after region changes
  useEffect(() => {
    const citiesOfRegion = cities.filter(city => city.Area === currentRegion)
    setCitiesFiltered(citiesOfRegion)
  }, [currentRegion])
  //Filtering post offices after city changes
  useEffect(() => {
    const postOfficesOfCity = postOffices.filter(
      office => office.CityRef === currentCity
    )
    setPostOfficesFiltered(postOfficesOfCity)
  }, [currentCity])
  //Getting region center after region changes
  useEffect(() => {
    const newRegionCenter = cities.filter(city => regionCenterRef === city.Ref)
    if (newRegionCenter && newRegionCenter.length > 0) {
      setRegionCenter(newRegionCenter[0])
    }
  }, [currentRegion])
  //Setting current region on region change, reseting current city to trigger new filtering of post offices
  const handleRegionChange = newRegion => {
    setCurrentCity("")
    const newCurrentRegion = regions.filter(
      region => newRegion === region.Description
    )
    if (newCurrentRegion && newCurrentRegion.length > 0) {
      setCurrentRegion(newCurrentRegion[0].Ref)
    }
    //Getting center of region Ref
    if (newCurrentRegion && newCurrentRegion.length > 0) {
      setRegionCenterRef(newCurrentRegion[0].AreasCenter)
    }
  }
  //Setting current city to trigger filtering of post offices
  const handleCityChange = newCity => {
    const newCurrentCity = citiesFiltered.filter(
      city => newCity === city.Description
    )
    if (newCurrentCity && newCurrentCity.length > 0) {
      setCurrentCity(newCurrentCity[0].Ref)
    }
  }

  return (
    <Formik
      initialValues={{
        name: "",
        tel: "+380 ",
        callback: false,
        email: "",
        comment: "",
        delivery: "Доставка Новою Поштою",
        region: "",
        city: "",
        postOffice: "",
        payment: "На картку Приват Банку",
      }}
      validate={values => {
        let errors = {}
        if (values.name.length < 4) {
          errors.name = "Будь ласка, вкажіть справжні ім'я та прізвище."
        }
        if (values.tel.length < 10) {
          errors.tel = "Будь ласка, вкажіть коректний номер телефону."
        }
        if (values.region.length < 3) {
          errors.region = "Будь ласка, оберіть область."
        }
        if (values.city.length < 2) {
          errors.city = "Будь ласка, оберіть населений пункт."
        }
        if (values.postOffice.length < 3) {
          errors.postOffice = "Будь ласка, оберіть відділення Нової Пошти."
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting, resetForm }, initialValues) => {
        values.time = new Date().toISOString().split("T")[0]
        values.order = props.cart
        console.log(values)
        axios
          .post("/orders.json", values)
          .then(response => {
            values.number = `${new Date()
              .toISOString()
              .split("T")[0]
              .slice(5, 10)
              .replace("-", "")}${100 + Math.floor(Math.random() * 900)}`
            console.log(response)
            resetForm(initialValues)
            props.clearCart()
            setSubmitting(false)
            props.setOrderNumber(values.number)
          })
          .catch(error => {
            console.log(error.response)
            setSubmitting(false)
          })
      }}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <label>Ім'я та прізвище</label>
          <Field name="name" />
          <span style={{ color: "red" }}>
            <ErrorMessage name="name" />
          </span>

          <label>Номер телефону</label>
          <Field name="tel" />
          <span style={{ color: "red" }}>
            <ErrorMessage name="tel" />
          </span>

          <label>Email</label>
          <Field name="email" type="email" />
          <span style={{ color: "red" }}>
            <ErrorMessage name="tel" />
          </span>

          <label>Передзвоніть мені для уточнення замовлення</label>
          <Field name="callback" type="checkbox" />

          <label>Коментар до замовлення</label>
          <Field name="comment" as="textarea" />

          <label>
            Доставка по Україні "Новою поштою" за тарифами "Нової пошти"
          </label>
          <Field type="radio" name="delivery" checked={true} />

          <label>Область</label>
          <Field
            as="select"
            name="region"
            //Passing value to form values, handling change of current region, reseting city and post office values
            onChange={event => {
              values.region = event.target.value
              handleRegionChange(event.target.value)
              values.city = ""
              values.postOffice = ""
            }}
          >
            <option value="">--Оберіть область--</option>
            {regions &&
              regions.map(item => {
                return (
                  <option key={item.Ref} value={item.Description}>
                    {item.Description}
                  </option>
                )
              })}
          </Field>
          <span style={{ color: "red" }}>
            <ErrorMessage name="region" />
          </span>

          <label>Місто</label>
          <Field
            as="select"
            name="city"
            //Passing value to form values, handling change of current city, reseting post office value
            onChange={event => {
              values.city = event.target.value
              handleCityChange(event.target.value)
              values.postOffice = ""
            }}
          >
            <option value="">--Оберіть місто--</option>
            {regionCenter && (
              <option value={regionCenter.Description}>
                {regionCenter.Description}
              </option>
            )}
            {citiesFiltered && citiesFiltered.length > 0
              ? citiesFiltered.map(item => {
                  return (
                    <option key={item.Ref} value={item.Description}>
                      {item.Description}
                    </option>
                  )
                })
              : null}
          </Field>
          <span style={{ color: "red" }}>
            <ErrorMessage name="city" />
          </span>

          <label>Поштове відділення</label>
          <Field name="postOffice" as="select">
            <option value="">--Оберіть відділення--</option>
            {postOfficesFiltered && postOfficesFiltered.length > 0
              ? postOfficesFiltered.map(item => {
                  return (
                    <option key={item.Ref} value={item.Description}>
                      {item.Description}
                    </option>
                  )
                })
              : null}
          </Field>
          <span style={{ color: "red" }}>
            <ErrorMessage name="postOffice" />
          </span>

          <label>На картку Приват Банку. Реквізити: 0000 000 00 00 0</label>
          <Field type="radio" name="payment" checked={true} />
          <button type="submit" disabled={isSubmitting}>
            Замовити
          </button>
        </Form>
      )}
    </Formik>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutForm)
