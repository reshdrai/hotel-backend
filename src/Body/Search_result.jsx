
import React, { useState, useEffect } from 'react';
import NewContext from '../Body/NewContext';
import Filter from './Filter';
import { useParams } from 'react-router-dom';
import Data from '../Apis/Data';
import { Link } from 'react-router-dom';
import Categories from './Categories';

function Search_result() {
    const { id, category } = useParams();
    const [filter, setFilter] = useState(null);
    const [filteredRooms, setFilteredRooms] = useState(Data);

    useEffect(() => {
        filterRoomsByCategory(category);
    }, [category]);

    const handlefilter = () => {
        if (filter == null) {
            setFilter(<Filter />);
        }
    };

    const crossfilter = () => {
        if (filter != null) {
            setFilter(null);
        }
    };

    const filterRoomsByCategory = (category) => {
        if (category) {
            const filteredData = Data.filter((x) => x.category === category);
            setFilteredRooms(filteredData);
        } else {
            setFilteredRooms(Data);
        }
    };
    const handleAllroomsClick = () => {
        filterRoomsByCategory();
    };

    const handleDeluxeClick = () => {
        filterRoomsByCategory('Deluxe');
    };

    const handleStandardClick = () => {
        filterRoomsByCategory('Standard');
    };
    const handlefamilyClick = () => {
        filterRoomsByCategory('Family');
    };
    const handlesuiteClick = () => {
        filterRoomsByCategory('Suite');
    };
    const handleExecutiveClick = () => {
        filterRoomsByCategory('Executive');
    };
    const handlepresidentalClick = () => {
        filterRoomsByCategory('Presidental');
    };

    return (
        <NewContext.Provider value={crossfilter}>
            <>
                {filter}
                <section id="search_result">
                    {/* <div className="first-container">
                        {Data.filter((x) => x.id === Number(id)).map((x) => (
                            <div className="search-result-item" key={x.id}>
                                <div className="search-top-image">
                                    <img src={x.image} alt={x.title} />
                                </div>
                                <div className="search_result-text">{x.category}</div>
                            </div>
                        ))}
                    </div> */}
                    <div className="second-container">
                        <div className="button-first-section">
                              <button className="search_result-button" onClick={handleAllroomsClick}>All rooms</button>
                            <button className="search_result-button" onClick={handlefamilyClick}>Family</button>
                            <button className="search_result-button" onClick={handleDeluxeClick}>Deluxe</button>
                            <button className="search_result-button" onClick={handleStandardClick}>Standard</button>
                            <button className="search_result-button" onClick={handlesuiteClick}>Suite</button>
                            <button className="search_result-button" onClick={handlepresidentalClick}>Presidental</button>
                        </div>
                        <div className="button-second-section">
                            
                            <button className="filter-icon" onClick={handlefilter}>
                                <img src="https://as1.ftcdn.net/v2/jpg/03/20/78/84/1000_F_320788475_nEiLVViOBewea7taZWqNUR0lJAMTAaSo.jpg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="third-container">
                        <div className="row">
                            {filteredRooms.map((x) => (
                                <div className="search_result-card col-lg-3 col-sm-12" key={x.id}>
                                    <Link to={`/room_booking/${x.id}`}>
                                        <div className="search_result-card-image">
                                            <img src={x.image} alt={x.title} />
                                        </div>
                                    </Link>
                                    <div className="search_result-card_desc">{x.category} &nbsp; <i className="fa-solid fa-heart"></i></div>
                                    <div className="search_result-card-price">$299.98</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
               
            </>
        </NewContext.Provider>
    );
}

export default Search_result;




