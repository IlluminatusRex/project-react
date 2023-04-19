import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearch } from '../../redux/searchStringRedux';

const SearchForm = () => {
    const [searchString, setTitle] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearch( searchString ));
        setTitle('');
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput type="text" placeholder="Search…" value={searchString} onChange={e => setTitle(e.target.value)}/>
            <Button>Search…</Button>
        </form>
    );
};

export default SearchForm;