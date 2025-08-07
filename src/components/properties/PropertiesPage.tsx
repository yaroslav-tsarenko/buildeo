"use client";

import React, { useState } from "react";
import styles from "./Properties.module.scss";
import { useProperties } from "@/context/PropertyContext";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import { useRouter } from "next/navigation";
import { Tab, Tabs, Box, Slider, Select, MenuItem, InputLabel, FormControl, Checkbox, FormControlLabel, Button, Menu, SelectChangeEvent} from "@mui/material";

type Property = {
    _id: string;
    title: string;
    location: string;
    description: string;
    photos: string[];
};

export type PropertyFilter = {
    price?: number;
    type?: string;
    location?: string;
    rooms?: number;
    parking?: boolean;
    petsAllowed?: boolean;
    floor?: number;
};


const PropertiesPage = () => {
    const [maxPrice, setMaxPrice] = useState<number>(100000);
    const [propertyType, setPropertyType] = useState<string>('apartment');
    const [location, setLocation] = useState<string>('');
    const [rooms, setRooms] = useState<number>(1);
    const [parking, setParking] = useState<boolean>(false);
    const [petsAllowed, setPetsAllowed] = useState<boolean>(false);
    const [floorNumber, setFloorNumber] = useState<number>(0);
    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
    const { setFilter, filteredProperties } = useProperties();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handlePriceChange = (_: Event, newValue: number | number[]) => {
        const price = Array.isArray(newValue) ? newValue[0] : newValue;
        setMaxPrice(price);
        setFilter({ price });
    };

    const handleLocationChange = (e: SelectChangeEvent<string>) => {
        const value = e.target.value;
        setLocation(value);
        setFilter({ location: value });
    };

    const handleRoomsChange = (e: SelectChangeEvent<string>) => {
        const value = parseInt(e.target.value, 10);
        setRooms(value);
        setFilter({ rooms: value });
    };

    const handleFloorChange = (e: SelectChangeEvent<string>) => {
        const value = parseInt(e.target.value, 10);
        setFloorNumber(value);
        setFilter({ floor: value });
    };

    const handleParkingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParking(e.target.checked);
        setFilter({ parking: e.target.checked });
    };

    const handlePetsAllowedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPetsAllowed(e.target.checked);
        setFilter({ petsAllowed: e.target.checked });
    };

    const handleClickMenu = (event: React.MouseEvent<HTMLElement>, property: Property) => {
        setAnchorEl(event.currentTarget);
        setSelectedProperty(property);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleShowDetails = () => {
        setSidebarOpen(true);
        setAnchorEl(null);
    };

    const handleCloseSidebar = () => {
        setSidebarOpen(false);
    };

    const resetFilters = () => {
        setMaxPrice(100000);
        setPropertyType("apartment");
        setLocation("");
        setRooms(1);
        setParking(false);
        setPetsAllowed(false);
        setFloorNumber(0);
        setFilter({});
    };

    const applyFilters = () => {
        setFilter({
            price: maxPrice,
            type: propertyType,
            location,
            rooms,
            parking,
            petsAllowed,
            floor: floorNumber,
        });
    };


    return (
        <div className={styles.wrapper}>
            <div className={styles.inner}>
                <div className={styles.titles}>
                    <h2>Find Best Properties</h2>
                    <p>With Best prices</p>
                </div>
                <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                    <Box sx={{
                        width: 350,
                        padding: 2,
                        borderRight: '1px solid #ddd',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: "10px"
                    }}>
                        <Tabs value={propertyType} onChange={(_, newValue) => setPropertyType(newValue)}
                              aria-label="Filter für Immobilientyp">
                            <Tab label="Wohnung" value="apartment"/>
                            <Tab label="Haus" value="house"/>
                            <Tab label="Eigentumswohnung" value="condo"/>
                            <Tab label="Studio" value="studio"/>
                        </Tabs>
                        <div className={styles.filterSection}>
                            <Typography >Preisbereich</Typography>
                            <Slider
                                value={maxPrice}
                                onChange={handlePriceChange}
                                min={0}
                                max={1000000}
                                step={1000}
                                valueLabelDisplay="auto"
                                valueLabelFormat={(value) => `€${value}`}
                            />
                        </div>
                        <div className={styles.filterSection}>
                            <Typography >Location</Typography>
                            <FormControl fullWidth>
                                <InputLabel>Ort</InputLabel>
                                <Select
                                    value={location}
                                    label="Ort"
                                    onChange={handleLocationChange}>
                                    <MenuItem value="Berlin">Berlin</MenuItem>
                                    <MenuItem value="München">München</MenuItem>
                                    <MenuItem value="Hamburg">Hamburg</MenuItem>
                                    <MenuItem value="Köln">Köln</MenuItem>
                                    <MenuItem value="Frankfurt am Main">Frankfurt am Main</MenuItem>
                                    <MenuItem value="Stuttgart">Stuttgart</MenuItem>
                                    <MenuItem value="Düsseldorf">Düsseldorf</MenuItem>
                                    <MenuItem value="Dortmund">Dortmund</MenuItem>
                                    <MenuItem value="Leipzig">Leipzig</MenuItem>
                                    <MenuItem value="Bremen">Bremen</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className={styles.filterSection}>
                            <Typography >Zimmer</Typography>
                            <FormControl fullWidth>
                                <InputLabel>Zimmer</InputLabel>
                                <Select
                                    value={rooms.toString()}
                                    label="Zimmer"
                                    onChange={handleRoomsChange}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5+</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className={styles.filterSection}>
                            <FormControlLabel
                                control={<Checkbox checked={parking} onChange={handleParkingChange}/>}
                                label="Parkplatz"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={petsAllowed} onChange={handlePetsAllowedChange}/>}
                                label="Haustiere erlaubt"
                            />
                        </div>
                        <div className={styles.filterSection}>
                            <Typography >Floor Number</Typography>
                            <Select
                                value={floorNumber.toString()}
                                onChange={handleFloorChange}
                                fullWidth
                            >
                                <MenuItem value={0}>Ground Floor</MenuItem>
                                <MenuItem value={1}>1st Floor</MenuItem>
                                <MenuItem value={2}>2nd Floor</MenuItem>
                                <MenuItem value={3}>3rd Floor</MenuItem>
                                <MenuItem value={4}>4th+ Floor</MenuItem>
                            </Select>
                        </div>
                        <div className={styles.filterButtons}>
                            <Button onClick={resetFilters} variant="outlined" color="error" fullWidth>
                                Filter zurücksetzen
                            </Button>
                            <Button onClick={applyFilters} variant="contained" color="primary" fullWidth>
                                Filter anwenden
                            </Button>
                        </div>
                    </Box>
                    <Box sx={{flexGrow: 1, padding: 2}}>
                        <div className={styles.propertiesContent}>
                            {filteredProperties.map((property) => (
                                <div key={property._id}>
                                <Card
                                        sx={{
                                            minHeight: "280px",
                                            width: 320,
                                            cursor: "pointer",
                                            transition: "transform 0.2s cubic-bezier(.4,2,.6,1)",
                                            '&:hover': {
                                                transform: 'scale(1.04)',
                                                zIndex: 2,
                                            },
                                        }} onClick={(event) => handleClickMenu(event, property)}
                                    >
                                        <CardCover>
                                            <img
                                                src={property.photos[0] || "/placeholder.jpg"}
                                                alt={property.title}
                                                loading="lazy"
                                            />
                                        </CardCover>
                                        <CardCover
                                            sx={{
                                                background:
                                                    "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                                            }}
                                        />
                                        <CardContent sx={{ justifyContent: "flex-end" }}>
                                            <Typography level="title-lg" textColor="#fff">
                                                {property.title}
                                            </Typography>
                                            <Typography
                                                startDecorator={<LocationOnRoundedIcon />}
                                                textColor="neutral.300">
                                                {property.location}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={handleCloseMenu}>
                                        <MenuItem onClick={() => {
                                            handleCloseMenu();
                                            if (selectedProperty?._id) {
                                                localStorage.setItem("propertyId", selectedProperty._id);
                                                router.push(`/property`);
                                            }
                                        }}>
                                            Zur Immobilienseite gehen
                                        </MenuItem>
                                        <MenuItem onClick={handleShowDetails}>Immobiliendetails anzeigen</MenuItem>
                                    </Menu>
                                </div>
                            ))}
                        </div>
                    </Box>
                </Box>
            </div>
            {sidebarOpen && selectedProperty && (
                <Box sx={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    width: '400px',
                    height: '100vh',
                    backgroundColor: 'white',
                    boxShadow: '-2px 0px 10px rgba(0, 0, 0, 0.1)',
                    zIndex: 1300,
                    padding: 2,
                    overflowY: 'auto'
                }}>
                    <Box mt={2}>
                        <iframe
                            width="100%"
                            height="300"
                            frameBorder="0"
                            style={{ border: 0 }}
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDVNDAsPWNwktSF0f7KnAKO5hr8cWSJmNM&q=${encodeURIComponent(selectedProperty.location)}`}
                            allowFullScreen
                        ></iframe>
                    </Box>
                    <Button onClick={handleCloseSidebar} variant="outlined" color="error" sx={{ mb: 2 }}>Seitenleiste schließen</Button>
                    <Typography  gutterBottom>{selectedProperty.title}</Typography>
                    <Typography  gutterBottom>{selectedProperty.location}</Typography>
                    <Typography  gutterBottom>{selectedProperty.description}</Typography>
                </Box>
            )}
        </div>
    );
};

export default PropertiesPage;
