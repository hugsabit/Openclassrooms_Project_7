import React from 'react';
import Tag from '../tag/tag';
import Dropdown from '../dropdown/dropdown';
import Rate from '../rate/rate';
import datas from '../../data/logements.json'
import { useParams } from 'react-router-dom';
import Carrousel from '../carrousel/carrousel';

function LogementContent() {

    const {id} = useParams();
    const data = datas.find((dataInfo) => dataInfo.id === id);
    const TagsConstruct = data.tags.map((name, i) => {
        return (
            <Tag key={i} text={name}></Tag>
        )
    });
    const Equipements = data.equipments.map((content, i) => {
        return (
            <p key={i}>{content}</p>
        )
    });
    return (
        <>
            <Carrousel slides={data.pictures}></Carrousel>
            <section className='logement-infos'>
                <div className='logement-info'>
                    <h1>{data.title}</h1>
                    <h2>{data.location}</h2>
                    <div className='tag-container'>
                        {TagsConstruct}
                    </div>
                </div>
                <div className='host-infos'>
                    <div className='host-info'>
                        <p>{data.host.name}</p>
                        <img src={data.host.picture} alt='Icone de profile'></img>
                    </div>
                    <div>
                        <Rate rate={data.rating}></Rate>
                    </div>
                </div>
            </section>
            <section className='logement-descript'>
                <Dropdown key={'1'} title={'Description'} content={data.description}></Dropdown>
                <Dropdown key={'2'} title={'Équipements'} content={Equipements}></Dropdown>
            </section>
        </>
    )
}

export default LogementContent;