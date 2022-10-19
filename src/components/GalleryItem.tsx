import { useState } from 'react'

interface GalleryItemProps {
    item: ItemProps
}

const GalleryItem = (props: GalleryItemProps) => {
    let [view, setView] = useState(false)

    const simpleView = () => {
        return (
            <div style={{
                
                'height': '10vh',
                'border': '1px solid black',
                'display': 'block',
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'width': '50%'
            }}>
                <h3>{props.item.trackName}</h3>
                <h4>{props.item.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={{
                'display': 'block',
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'width': '50%',
                'backgroundImage': `url(${props.item.artworkUrl100})`,
                'backgroundRepeat': 'no-repeat',
                'backgroundSize': 'cover',
                'color': 'white'
            }}>
                <h2>{props.item.trackName}</h2>
                <h3>{props.item.collectionName}</h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)}
        style={{'display': 'block',
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'width': '50%'
        }}>
            {view ? detailView() : simpleView()}
        </div>
    )
} 

export default GalleryItem