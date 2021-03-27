import { createSlice } from '@reduxjs/toolkit';
import doctor from 'src/assets/images/doctor1.png';

const doctorsData = [
  {
    id: 1,
    time: '10-11am',
    name: 'Dr. Caudi',
    phone: '+132487483',
    details:
      'a degree in medicine recognised by the General Medical Council (GMC) a two-year foundation programme of general training specialist training in a chosen area of medicine.',
    img: doctor,
    appoints: 2,
    appointsinfo: [],
  },
  {
    id: 2,
    time: '11-12am',
    name: 'Dr. Caudi',
    phone: '+132487483',
    details:
      'a degree in medicine recognised by the General Medical Council (GMC) a two-year foundation programme of general training specialist training in a chosen area of medicine.',
    img: doctor,
    appoints: 8,
    appointsinfo: [],
  },
  {
    id: 3,
    time: '9am-10am',
    name: 'Dr. Caudi',
    phone: '+132487483',
    details:
      'a degree in medicine recognised by the General Medical Council (GMC) a two-year foundation programme of general training specialist training in a chosen area of medicine.',
    img: doctor,
    appoints: 10,
    appointsinfo: [],
  },
  {
    id: 4,
    time: '10-11am',
    name: 'Dr. Caudi',
    phone: '+132487483',
    details:
      'a degree in medicine recognised by the General Medical Council (GMC) a two-year foundation programme of general training specialist training in a chosen area of medicine.',
    img: doctor,
    appoints: 2,
    appointsinfo: [],
  },
  {
    id: 5,
    time: '11-12am',
    name: 'Dr. Caudi',
    phone: '+132487483',
    details:
      'a degree in medicine recognised by the General Medical Council (GMC) a two-year foundation programme of general training specialist training in a chosen area of medicine.',
    img: doctor,
    appoints: 8,
    appointsinfo: [],
  },
  {
    id: 6,
    time: '9am-10am',
    name: 'Dr. Caudi',
    phone: '+132487483',
    details:
      'a degree in medicine recognised by the General Medical Council (GMC) a two-year foundation programme of general training specialist training in a chosen area of medicine.',
    img: doctor,
    appoints: 10,
    appointsinfo: [],
  },
];

const loginSlice = createSlice({
  name: 'appoint',
  initialState: doctorsData,
  reducers: {
    addInfo: (state, { payload }) => {
      state.map((item) => {
        if (item.id === payload.doctorsId) {
          item.appoints > 0 && item.appointsinfo.push(payload);
          item.appoints -= item.appoints >= 1 && 1;
        }
      });
      // state.push(payload);
    },
    deleteItem: (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    },
  },
});

export const { addInfo, deleteItem } = loginSlice.actions;
export default {
  doctors: loginSlice.reducer,
};
