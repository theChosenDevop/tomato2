import { toast } from "react-toastify";
import "./List.css";
import axios from "axios";
import { useEffect, useState } from "react";

const List = () => {
  const url = "http://localhost:4000";

  const [list, setList] = useState([]);
  // const [remove, setRemove] = useState(false);

  const removeFood = async (foodId) => {
    console.log(foodId);
    const response = await axios.post(`${url}/api/food/remove`, {id: foodId });
    // await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
      fetchList();
    } else {
      toast.error(response.data.message);
    
  }
  }
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="list-add">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/`+ item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className="cursor" onClick={() => removeFood(item._id)}>X</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default List;
