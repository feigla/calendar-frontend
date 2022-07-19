import React, {FC, useEffect} from 'react';
import MyInput from "../../UI/input/MyInput";
import {useAppSelector} from "../../../hooks/redux";
import classes from './EventsForm.module.css'
import MyTextarea from "../../UI/textarea/MyTextarea";
import MyButton from "../../UI/button/MyButton";
import {useEvent} from "../../../hooks/useEvent";
import deleteIcon from '../../../assets/delete.png'
import {IEvent} from "../../../types/IEvent";
import {useActions} from "../../../hooks/useActions";
import {getEventForChange} from "../../../utils/getEventForChange";
import EventColorBlock from "./../EventColorBlock/EventColorBlock";

const EventsForm: FC = () => {
    const {selectedDay} = useAppSelector(state => state.selectedDayReducer)
    const {activeModal} = useAppSelector(state => state.activeModalReducer)
    const {selectedEvent} = useAppSelector(state => state.eventReducer)

    const {setActiveModal, updateEvent, deleteEvent, setSelectedEvent, createEvent,} = useActions()
    const [titleValue, descValue, color, setTitleValue, setColor, setDescValue] = useEvent(selectedEvent)

    useEffect(() => {
        if (!activeModal) {
            setSelectedEvent(null)
            setTitleValue('')
            setDescValue('')
        }
    }, [activeModal])

    function changeEvent() {
        const date = selectedDay.format()
        const event = getEventForChange(titleValue, color, selectedEvent, date, descValue)
        setActiveModal(false)
        selectedEvent ? updateEvent(event) : createEvent(event)
    }

    function removeEvent() {
        setActiveModal(false)
        deleteEvent(selectedEvent as IEvent)
    }

    return (
        <div className={classes.event__wrapper}>
            <div className={classes.header}>
                {selectedEvent &&
                    <img onClick={removeEvent} src={deleteIcon} alt='' className={classes.delete}/>}
                <div className={classes.close} onClick={() => setActiveModal(false)}>
                </div>
            </div>
            <MyInput
                style={{padding: '10px'}}
                placeholder='Title'
                value={titleValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitleValue(e.target.value)}
            />
            <div className={classes.event__text}>
                {selectedDay.format('dddd, MMMM DD')}
            </div>
            <MyTextarea
                placeholder='Description'
                value={descValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescValue(e.target.value)}
            />
            <div className={classes.event__block}>
                <MyButton onClick={changeEvent}>Save</MyButton>
                <EventColorBlock color={color} setColor={setColor}/>
            </div>
        </div>
    );
};

export default EventsForm;