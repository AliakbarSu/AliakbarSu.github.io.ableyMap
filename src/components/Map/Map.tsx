import React, { useRef, useEffect } from 'react';
import './map.scss';
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Locator from '@arcgis/core/tasks/Locator';
import LayerList from '@arcgis/core/widgets/LayerList';
import Compass from '@arcgis/core/widgets/Compass';
import Home from '@arcgis/core/widgets/Home';
import ScaleBar from '@arcgis/core/widgets/ScaleBar';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import Basemap from '@arcgis/core/Basemap';
import { useAppDispatch } from '../../store/hooks'
import { startLoading, stopLoading } from '../../store/UI/UI.reducer'



const Map: React.FC = () => {
    const mapDiv = useRef<HTMLDivElement>(null)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(startLoading())
        if (mapDiv.current) {
            const locatorTask = new Locator({
                url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
            })

            const webmap = new WebMap({
                portalItem: {
                    id: "e221dc39fa7d43609562c529f170d416"
                },
                // basemap: "NZ Imagery"
            })
        
            const view = new MapView({
                container: mapDiv.current,
                map: webmap,
                center: [-118.805, 34.027], // Longitude, latitude
                zoom: 8,
            })

            view.when(() => {
                dispatch(stopLoading())
              }, (error: any) => {
                dispatch(stopLoading())
                console.log("Loading map failed", error)
            })

            // Add Widgets

            let homeWidget = new Home({
                view: view
            })
            view.ui.add(homeWidget, "top-left")

            let scaleBar = new ScaleBar({
                view: view,
                unit: "metric"
            })
            view.ui.add(scaleBar, "bottom-left")

            let compass = new Compass({
                view: view
            })
            view.ui.add(compass, "top-left")

            let layerList = new LayerList({
                view: view
            })
            view.ui.add(layerList, "top-left")


            let basemap = new Basemap({
                portalItem: {
                  id: "5fcae3bfae5241b6abc3fa3ea93bdf3a" 
                }
            })
        
            let basemapToggle = new BasemapToggle({
                view: view,
                nextBasemap: basemap
            })
            view.ui.add(basemapToggle, "top-right")

            // Add Feature Layer
            const featureLayerURL: string = "https://services7.arcgis.com/jI87xPT7G1AGV8Uo/ArcGIS/rest/services/LINZ_NZ_Property_Titles/FeatureServer/0"
            const trailsLayer = new FeatureLayer({
                url: featureLayerURL,
                title: "LINZ NZ Property Titles"
            })
            
            webmap.add(trailsLayer, 0)

            view.popup.autoOpenEnabled = false
            view.on("click", (event) => {
                // Get the coordinates of the click on the view
                const lat = Math.round(event.mapPoint.latitude * 1000) / 1000;
                const lon = Math.round(event.mapPoint.longitude * 1000) / 1000;

                view.popup.open({
                    title: "Longitude, Latitude: [" + lon + ", " + lat + "]",
                    location: event.mapPoint // Display the clicked location
                })

                const params = { location: event.mapPoint }

                // Display the popup
                locatorTask
                .locationToAddress(params)
                .then((response) => {
                    view.popup.content = response.address
                })
                .catch(() => {
                    view.popup.content = "Failed to found an address for this location"
                })
            })
        }
    }, [])

    return (<div className="mapDiv" ref={mapDiv}></div>)
}

export default Map