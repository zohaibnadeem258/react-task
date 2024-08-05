import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { ImCross } from 'react-icons/im';
import { FiPercent } from 'react-icons/fi';
import { IoSearch } from 'react-icons/io5';

// API response
const apiResponse =[
  {"id":14864,"tab_id":3202,"name":"Recurring Item","amount":12.0,"amount_type":"fixed","allow_quantity":null,"deleted_at":null,"required":false,"created_at":"2018-07-02T14:11:00.305Z","updated_at":"2018-06-17T19:19:42.304Z","type":"TabItem","position":1,"anchor":null,"parent_id":null,"catalog_object_id":null,"description":null,"available_quantity":null,"hidden":false,"options":{"recurring":{"enabled":true,"options":{"ends":{"type":"never"},"start":{"type":"first_payment"},"repeatInterval":"P1M"}}},"tsv":"'item':2 'recur':1","quantity_sold":2,"amount_sold":24.0,"total_buyers":1,"quantity_refunded":0,"amount_discounted":0.0,"amount_refunded":0.0,"net_amount":24.0,"net_quantity":2,"subcategory":null,"images":[]},{"id":14865,"tab_id":3202,"name":"Jasinthe Bracelet","amount":26.0,"amount_type":"fixed","allow_quantity":null,"deleted_at":null,"required":false,"created_at":"2018-07-02T14:11:00.309Z","updated_at":"2018-08-11T03:08:39.841Z","type":"TabItem","position":1,"anchor":null,"parent_id":14866,"catalog_object_id":8463,"description":null,"available_quantity":8,"hidden":false,"options":{"makeAvailableQuantityPublic":false},"tsv":"'bracelet':2 'jasinth':1","quantity_sold":11,"amount_sold":286.0,"total_buyers":7,"quantity_refunded":0,"amount_discounted":0.0,"amount_refunded":0.0,"net_amount":286.0,"net_quantity":11,"subcategory":null,"category":{"id":14866,"name":"Bracelets","options":{}},"images":[{"id":5572,"upload_path":"uploads/image/image_file/716/jasinthe_bracelet.jpg","metadata":{},"url":"https://images.cheddarcdn.com/eyJidWNrZXQiOiJjaGVkZGFyLXVwLXJldmlldyIsImtleSI6InVwbG9hZHMvaW1hZ2UvaW1hZ2VfZmlsZS83MTYvamFzaW50aGVfYnJhY2VsZXQuanBnIiwib3V0cHV0Rm9ybWF0IjoianBlZyIsImVkaXRzIjp7ImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1fX19fQ=="}]},{"id":14867,"tab_id":3202,"name":"Jasinthe Bracelet","amount":26.0,"amount_type":"fixed","allow_quantity":null,"deleted_at":null,"required":false,"created_at":"2018-07-02T14:11:00.317Z","updated_at":"2018-07-10T13:24:53.733Z","type":"TabItem","position":2,"anchor":null,"parent_id":14866,"catalog_object_id":8463,"description":null,"available_quantity":19,"hidden":false,"options":{"makeAvailableQuantityPublic":true},"tsv":"'bracelet':2 'jasinth':1","quantity_sold":1,"amount_sold":26.0,"total_buyers":1,"quantity_refunded":0,"amount_discounted":5.2,"amount_refunded":0.0,"net_amount":20.8,"net_quantity":1,"subcategory":null,"category":{"id":14866,"name":"Bracelets","options":{}},"images":[{"id":5571,"upload_path":"uploads/image/image_file/1742/jasinthe_bracelet.jpg","metadata":{},"url":"https://images.cheddarcdn.com/eyJidWNrZXQiOiJjaGVkZGFyLXVwLXJldmlldyIsImtleSI6InVwbG9hZHMvaW1hZ2UvaW1hZ2VfZmlsZS8xNzQyL2phc2ludGhlX2JyYWNlbGV0LmpwZyIsIm91dHB1dEZvcm1hdCI6ImpwZWciLCJlZGl0cyI6eyJmbGF0dGVuIjp7ImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NX19fX0="}]},{"id":14868,"tab_id":3202,"name":"Recurring Item with questions","amount":12.0,"amount_type":"fixed","allow_quantity":null,"deleted_at":null,"required":false,"created_at":"2018-07-02T14:11:00.323Z","updated_at":"2018-07-02T14:10:25.296Z","type":"TabItem","position":2,"anchor":null,"parent_id":null,"catalog_object_id":null,"description":null,"available_quantity":null,"hidden":false,"options":{"recurring":{"enabled":true,"options":{"ends":{"type":"payment_count","payment_count":5},"start":{"type":"first_payment"},"repeatInterval":"P1M"}},"makeAvailableQuantityPublic":false},"tsv":"'item':2 'question':4 'recur':1","quantity_sold":0,"amount_sold":0.0,"total_buyers":0,"quantity_refunded":0,"amount_discounted":0.0,"amount_refunded":0.0,"net_amount":0.0,"net_quantity":0,"subcategory":null,"images":[]},{"id":14869,"tab_id":3202,"name":"Zero amount item with questions","amount":0.0,"amount_type":"fixed","allow_quantity":null,"deleted_at":null,"required":false,"created_at":"2018-07-02T14:11:00.334Z","updated_at":"2018-07-02T14:09:09.267Z","type":"TabItem","position":3,"anchor":null,"parent_id":null,"catalog_object_id":null,"description":null,"available_quantity":null,"hidden":false,"options":{"makeAvailableQuantityPublic":false},"tsv":"'amount':2 'item':3 'question':5 'zero':1","quantity_sold":2,"amount_sold":0.0,"total_buyers":2,"quantity_refunded":0,"amount_discounted":0.0,"amount_refunded":0.0,"net_amount":0.0,"net_quantity":2,"subcategory":null,"images":[]},{"id":14870,"tab_id":3202,"name":"Inspire Bracelet","amount":32.0,"amount_type":"fixed","allow_quantity":null,"deleted_at":null,"required":false,"created_at":"2018-07-02T14:11:00.348Z","updated_at":"2018-06-27T16:47:21.731Z","type":"TabItem","position":3,"anchor":null,"parent_id":14866,"catalog_object_id":8462,"description":null,"available_quantity":0,"hidden":false,"options":{},"tsv":"'bracelet':2 'inspir':1","quantity_sold":0,"amount_sold":0.0,"total_buyers":0,"quantity_refunded":0,"amount_discounted":0.0,"amount_refunded":0.0,"net_amount":0.0,"net_quantity":0,"subcategory":null,"category":{"id":14866,"name":"Bracelets","options":{}},"images":[{"id":5570,"upload_path":"uploads/image/image_file/715/inspire_bracelet.jpg","metadata":{},"url":"https://images.cheddarcdn.com/eyJidWNrZXQiOiJjaGVkZGFyLXVwLXJldmlldyIsImtleSI6InVwbG9hZHMvaW1hZ2UvaW1hZ2VfZmlsZS83MTUvaW5zcGlyZV9icmFjZWxldC5qcGciLCJvdXRwdXRGb3JtYXQiOiJqcGVnIiwiZWRpdHMiOnsiZmxhdHRlbiI6eyJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTV9fX19"}]},{"id":14872,"tab_id":3202,"name":"Normal item with questions","amount":55.0,"amount_type":"fixed","allow_quantity":null,"deleted_at":null,"required":false,"created_at":"2018-07-02T14:11:00.365Z","updated_at":"2018-07-02T14:09:46.143Z","type":"TabItem","position":4,"anchor":null,"parent_id":null,"catalog_object_id":null,"description":null,"available_quantity":null,"hidden":false,"options":{"makeAvailableQuantityPublic":false},"tsv":"'item':2 'normal':1 'question':4","quantity_sold":2,"amount_sold":110.0,"total_buyers":2,"quantity_refunded":0,"amount_discounted":22.0,"amount_refunded":0.0,"net_amount":88.0,"net_quantity":2,"subcategory":null,"images":[]},{"id":14873,"tab_id":3202,"name":"normal item ","amount":20.0,"amount_type":"fixed","allow_quantity":null,"deleted_at":null,"required":false,"created_at":"2018-07-02T14:11:00.378Z","updated_at":"2018-06-21T15:38:07.112Z","type":"TabItem","position":5,"anchor":null,"parent_id":null,"catalog_object_id":null,"description":null,"available_quantity":null,"hidden":false,"options":{},"tsv":"'item':2 'normal':1","quantity_sold":1,"amount_sold":20.0,"total_buyers":1,"quantity_refunded":0,"amount_discounted":4.0,"amount_refunded":0.0,"net_amount":16.0,"net_quantity":1,"subcategory":null,"images":[]}
]

const groupItemsByCategory = (items) => {
  const grouped = items.reduce((acc, item) => {
    const category = item.category ? item.category.name : 'Category Name'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(item);
    return acc
  }, {})

  return grouped
};

const FormComponent = () => {
  const [items, setItems] = useState(apiResponse);
  const groupedItems = groupItemsByCategory(items);

  return (
    <Formik
      initialValues={{
        applied_to: '',
        applicable_items: items.reduce((acc, item) => {
          acc[item.id] = false;
          return acc;
        }, {}),
        name: '',
        rate: ''
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, setFieldValue }) => (
        <>
        <div className='flex justify-between items-center'>
          <h5 className='text-3xl font-medium'>Add Task</h5>
          <ImCross />
        </div>
        <Form className="py-5 space-y-4">
          <div className="flex items-center space-x-2">
            <Field 
              as="input"
              name="name"
              placeholder='Tax Name'
              className="border p-2 rounded w-2/4"
            />
            <div className='relative'>
              <Field 
                as="input"
                name="rate"
                className="border p-2 rounded w-100"
              />
              <FiPercent className='absolute top-3 right-3'/>
            </div>
          </div>
          
          <label className='block'>
            <input 
              type="radio"
              name="applied_to"
              value="all"
              className='w-4 h-3 mr-1'
              onChange={() => {values.applied_to = 'all'}}
            />
            Apply to all items in collection
          </label>
          <label>
            <input 
              type="radio"
              name="applied_to"
              value="some"
              className='w-4 h-3 mr-1'
              onChange={() => {values.applied_to = 'some'}}
            />
            Apply to specific items
          </label>
          
          <hr />

          <div className='relative'>
            <Field 
              as="input"
              name="search"
              placeholder='Search Items'
              className="border py-2 px-7 rounded"
            />
            <IoSearch className='absolute top-3.5 left-2' />
          </div>

          {Object.keys(groupedItems).reverse().map((category) => (
            <div key={category} className="space-y-2">
              <div className="flex items-center space-x-2 bg-gray-200 p-2 rounded">
                <input
                  type="checkbox"
                  checked={groupedItems[category].every(item => values.applicable_items[item.id])}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    groupedItems[category].forEach(item => {
                      setFieldValue(`applicable_items.${item.id}`, isChecked);
                    });
                  }}
                  className="form-checkbox"
                />
                <label className="font-semibold">{category}</label>
              </div>
              <div className="ml-4 space-y-1">
                {groupedItems[category].map(item => (
                  <div key={item.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={values.applicable_items[item.id]}
                      onChange={() => setFieldValue(`applicable_items.${item.id}`, !values.applicable_items[item.id])}
                      className="form-checkbox"
                    />
                    <label>{item.name}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="bg-orange-600 text-white py-2 px-4 rounded
          hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 float-right"
          >
            Apply tax to items
          </button>
        </Form>
        </>
      )}
    </Formik>
  );
};

export default FormComponent;