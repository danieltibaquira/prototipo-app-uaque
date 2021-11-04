import instance from '../api/uso_biblioteca';
import CreateDataContext from './CreateDataContext';

const LibraryReducer = (state, action) => {
	switch (action.type) {
		case 'getTitles':
			return {...state, books: action.data};
		case 'saveBook':
			return {...state, saveBooks: [...state.saveBooks, action.data]};
		case 'savePreferences':
			return {...state, saveBooks: []};
		default:
			return {...state, errorMessage: ''};

	}
};

const getTitles = (dispatch) => async({title}) => {
	try{
        console.log(title)
		const response = await instance.get(`api/suj-e-004?itemId=${title}`);
        console.log(response)
		dispatch({type: 'getTitle', data: response.data});
	}catch(err){
		console.error(err);
		dispatch({type: 'add_error', data: err.message});
	}
}

const saveBook = (dispatch) => async({itemId}) => {
    console.log("Saving book with id: ", itemId)
    dispatch({type:'saveBook', data: itemId});
}

const savePreferences = (dispatch) => async({preferences}) => {
	try{
        console.log(preferences);
        //IMPLEMENTAR EN EL BACKEND
		dispatch({type: 'savePreferences', data: ''});
		const response = await instance.post('/preferences', {
          preferences
        });
	}catch(err){
		console.error(err);
		dispatch({type: 'add_error', data: err.message});
	}
}


export const { Provider, Context } = CreateDataContext(
	LibraryReducer,
	{getTitles, saveBook, savePreferences},
	{errorMessage: '', books:[], saveBooks: []}
)
