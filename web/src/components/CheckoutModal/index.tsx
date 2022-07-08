import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { useFormik } from "formik";
import { useSelector } from 'react-redux';
import * as Yup from "yup";
import store, { RootStore } from '../../store';
import { checkoutFetch } from '../../store/modules/cart';

interface CheckoutModalProps {
    showModal: () => void;
    active: boolean;
}

const phoneRegExp = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/

const validationSchema = Yup.object({
    name: Yup.string().required("É necessario que insira seu nome!"),
    email: Yup.string()
        .email("E-mail não é válido")
        .required("É necessário que insira seu e-mail!"),
    phone: Yup.string()
        .matches(phoneRegExp, "O número de telefone não é válido!")
        .required("É necessário que insira um número de telefone!")
});

function CheckoutModal({ showModal, active }: CheckoutModalProps) {
    const cart = useSelector((state: RootStore) => state.cart)
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: ""
        },
        validationSchema,
        onSubmit: async (values) => {
            const order = {
                name: values.name,
                phone: values.phone,
                email: values.email,
                total_order: cart.cartTotalAmount,
                discount: null,
                products_quantity: cart.cartTotalQuantity,
                shipping_total: null,
                Products: [...cart.checkoutItems],
            }
            store.dispatch(checkoutFetch(order))
            alert("Mensagem enviada com sucesso!");
        },
    });

    return (
        <div className={active ? 'flex-col z-50 flex items-center fixed inset-0 w-screen h-screen bg-[#EAE6E3]/40 backdrop-blur-sm gap-8 justify-center p-8' : 'hidden'}>
            <div className='bg-rosa-400 rounded-[30px] p-7 md:max-w-[789px] flex flex-col gap-5'>
                <div>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-rosa-100 md:text-h3 text-h4 font-semibold'>Pedido</h1>
                        <CloseOutlinedIcon onClick={showModal} className='cursor-pointer text-rosa-200 hover:text-rosa-100' />
                    </div>
                    <p className='max-w-[700px] md:text-h6 text-p3 leading-8 text-rosa-100'>A compra será finalizada pelo WhatsApp, para isso, informe seu nome e telefone com DDD.</p>
                </div>
                <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nome"
                        className="rounded-[20px] md:text-[20px] text-p3 pb-3 placeholder-rosa-200 px-4 pt-1 outline-none w-full"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.name && <span className='text-rosa-100'>{formik.errors.name}</span>}
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        className="rounded-[20px] text-[20px] pb-3 placeholder-rosa-200 px-4 pt-1 outline-none"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && <span className='text-rosa-100'>{formik.errors.email}</span>}
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Telefone"
                        className="rounded-[20px] md:text-[20px] text-p3 pb-3 placeholder-rosa-200 px-4 pt-1 outline-none w-full"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.phone && <span className='text-rosa-100'>{formik.errors.phone}</span>}
                    <div className='flex justify-end'>
                        <button className="flex justify-center md:text-[30px] text-p3 font-bold text-bege-100 bg-rosa-200 px-16 py-1 rounded-[15px] hover:bg-rosa-100 md:max-w-[350px] w-full" type="submit">Enviar pedido</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CheckoutModal