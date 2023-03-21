import React, { useEffect, useState } from "react";
import Api from "../Api/api";
import styles from "./Album.module.css";

const DetailViewModal = React.lazy(() => import('./DetailViewModal'));

interface Album {
    name: string;
    image: Array<any>;
}

function Album() {
    const [data, setData] = useState<Album[]>([]);
    const [modalShow, setModalShow] = useState({});
    const fetchData = async () => {
        try {
            const response = await Api.fetchTopArtist();
            const data = await response.json();
            setData(data?.topalbums?.album);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSort = () => {
        setData([...data.sort((a, b) => a.name.localeCompare(b.name))]);
    }
    const handleDetailView = async (params: any) => {
        const args = {
            artist: params?.artist?.name,
            album: params?.name
        }
        try {
            const response = await Api.fetchDetailViewAlbum(args);
            const data = await response.json();
            setModalShow({...data, show: true, });
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="sidebar">
            <br />
            <strong className="title">Albums</strong>
            <button name="sort" onClick={handleSort}>Sort by Name</button>
            <hr />
            <ul className={styles.list}>
                {data?.map((item) => (
                    (<li key={item.name} className={styles.list__item}>
                        <img
                            src={item?.image[2]['#text']}
                            alt="Alt-text"
                        />
                        <p>{item.name}</p>
                        <button name="detailView" onClick={() => { handleDetailView(item) }}>Detail View</button>
                    </li>
                    )
                ))}
            </ul>
            <DetailViewModal
                onHide={() => setModalShow({show: false})} 
                params={modalShow}
            />

        </div>
    );
}

export default Album;