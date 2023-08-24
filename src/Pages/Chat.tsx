import React, { useState, useEffect } from 'react';

interface Dish {
  id: number;
  imgURL: string;
  title: string;
  price: number;
  kind: string; 
  // ... Agrega otras propiedades si es necesario
}

const CrudTableWithApi = () => {
  const [dishData, setDishData] = useState<Dish[]>([]);
  const [formData, setFormData] = useState<Dish>({ id: 0, imgURL: '', title: '', price: 0, kind: '' });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const endpointDish = '/data-api/rest/dishservicios/';
      const response = await fetch(endpointDish);
      const result = await response.json();
      setDishData(result.value);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleAdd = async () => {
    if (formData.title && formData.price && formData.kind) {
      try {
        const response = await fetch('/data-api/rest/dishservicios/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          fetchData(); // Refresh data after adding
          setFormData({ id: 0, imgURL: '', title: '', price: 0, kind: '' });
        } else {
          console.log('Failed to add item');
        }
      } catch (error) {
        console.log('Error adding item:', error);
      }
    }
  };

  const handleEdit = (item: Dish) => {
    setEditMode(true);
    setFormData(item);
  };
  

  const handleUpdate = async () => {
    try {
      const response = await fetch(`/data-api/rest/dishservicios/${formData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        fetchData(); // Refresh data after updating
        setFormData({ id: 0, imgURL: '', title: '', price: 0, kind: '' });
        setEditMode(false);
      } else {
        console.log('Failed to update item');
      }
    } catch (error) {
      console.log('Error updating item:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/data-api/rest/dishservicios/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchData(); // Refresh data after deleting
      } else {
        console.log('Failed to delete item');
      }
    } catch (error) {
      console.log('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h2>CRUD Table with API</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Kind</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dishData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.kind}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>{editMode ? 'Edit Item' : 'Add Item'}</h3>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="kind"
          placeholder="Kind"
          value={formData.kind}
          onChange={handleInputChange}
        />
        {editMode ? (
          <button onClick={handleUpdate}>Update</button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}
      </div>
    </div>
  );
};

export default CrudTableWithApi;
