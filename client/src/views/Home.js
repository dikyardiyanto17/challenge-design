import Sidebar from "../components/Sidebar";
import "../css/home.css";
import dummyimage from "../assets/dummyimage.png";
import Pagination from "../components/Pagination";
import "../css/rightbar.css";

export default function Home() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />
        <div className="col-xl-10 col-lg-11 col-md-11 col-sm-11 home-template">
          <h1 className="home-header home-description-r">Customer</h1>
          <div className="d-flex flex-wrap">
            <div className="col-xl-6 col-lg-12 mt-lg-3 col-md-12 mt-md-3 col-sm-12 mt-sm-3 home-description-r">
              <span className="home-description">You can manage and organize your customer and other things here</span>
            </div>
            <div className="col-xl-6 col-lg-12 mt-lg-3 col-md-12 mt-md-3 col-sm-12 mt-sm-3">
              <div className="d-flex home-border-bottom" style={{ textAlign: "center" }}>
                <div className="col-4 home-border" tabIndex="1">
                  <span className="home-list">Customer</span>
                </div>
                <div className="col-4 home-border" tabIndex="1">
                  <span className="home-list">Promo</span>
                </div>
                <div className="col-4 home-border" tabIndex="1">
                  <span className="home-list">Voucher</span>
                </div>
              </div>
            </div>

            <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 d-flex flex-wrap home-main-items">
              <div className="home-main-items-2 home-banner-background">
                <div>
                  <span className="home-banner">Customer</span>
                </div>
                <div>
                  <span className="home-banner-description">On this menu you will be able to create, edit, and also delete the customer. Also you can manage it easily.</span>
                </div>
                <div className="d-flex justify-content-between">
                  <button className="home-custom-button">+ Add New Customer</button>
                  <form>
                    <div className="home-input-form d-flex align-items-center">
                      <svg className="home-svg-custom dont-show-it-2" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.66668 14.5C11.1645 14.5 14 11.6645 14 8.16666C14 4.66886 11.1645 1.83333 7.66668 1.83333C4.16887 1.83333 1.33334 4.66886 1.33334 8.16666C1.33334 11.6645 4.16887 14.5 7.66668 14.5Z" stroke="#D1D0D3" stroke-linecap="round" stroke-linejoin="round" />
                        <path opacity="0.4" d="M14.6667 15.1667L13.3333 13.8333" stroke="#D1D0D3" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <input className="home-custom-input" placeholder="Search Customer" />
                      <button className="home-custom-button-2">Search</button>
                    </div>
                  </form>
                  <button className="home-custom-button-3">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.6 1.89999H12.4C13.1333 1.89999 13.7333 2.49999 13.7333 3.23333V4.69999C13.7333 5.23333 13.4 5.89999 13.0667 6.23333L10.2 8.76666C9.8 9.09999 9.53333 9.76666 9.53333 10.3V13.1667C9.53333 13.5667 9.26667 14.1 8.93333 14.3L8 14.9C7.13333 15.4333 5.93333 14.8333 5.93333 13.7667V10.2333C5.93333 9.76666 5.66667 9.16666 5.4 8.83333L2.86667 6.16666C2.53333 5.83333 2.26667 5.23333 2.26667 4.83333V3.29999C2.26667 2.49999 2.86667 1.89999 3.6 1.89999Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span style={{ marginLeft: "5px" }} className="dont-show-it-2">Filter</span>
                  </button>
                  <button className="home-custom-button-3">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.33333 8.49999C1.33333 4.81999 4.29333 1.83333 8 1.83333C12.4467 1.83333 14.6667 5.53999 14.6667 5.53999M14.6667 5.53999V2.20666M14.6667 5.53999H11.7067" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                      <path opacity="0.4" d="M14.5933 8.5C14.5933 12.18 11.6067 15.1667 7.92667 15.1667C4.24667 15.1667 2 11.46 2 11.46M2 11.46H5.01333M2 11.46V14.7933" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span style={{ marginLeft: "5px" }} className="dont-show-it-2">Refresh</span>
                  </button>
                  <button className="home-custom-button-3">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path opacity="0.4" d="M4.83334 5.16666H11.1667V3.83333C11.1667 2.49999 10.6667 1.83333 9.16668 1.83333H6.83334C5.33334 1.83333 4.83334 2.49999 4.83334 3.83333V5.16666Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10.6667 10.5V13.1667C10.6667 14.5 10 15.1667 8.66668 15.1667H7.33334C6.00001 15.1667 5.33334 14.5 5.33334 13.1667V10.5H10.6667Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M14 7.16667V10.5C14 11.8333 13.3333 12.5 12 12.5H10.6667V10.5H5.33333V12.5H4C2.66667 12.5 2 11.8333 2 10.5V7.16667C2 5.83334 2.66667 5.16667 4 5.16667H12C13.3333 5.16667 14 5.83334 14 7.16667Z" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M11.3333 10.5H10.5267H4.66666" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path opacity="0.4" d="M4.66666 7.83333H6.66666" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="table-fluid-custom">
                <table className="mx-auto">
                  <thead>
                    <tr>
                      <th>
                        {" "}
                        <select name="cars" id="cars" className="home-select-custom">
                          <option value="volvo" selected disabled>
                            Customer Name
                          </option>
                        </select>
                      </th>
                      <th>
                        {" "}
                        <select name="cars" id="cars" className="home-select-custom">
                          <option value="volvo">Level</option>
                        </select>
                      </th>
                      <th>
                        {" "}
                        <select name="cars" id="cars" className="home-select-custom">
                          <option value="volvo">Favorite Menu</option>
                        </select>
                      </th>
                      <th>
                        {" "}
                        <select name="cars" id="cars" className="home-select-custom">
                          <option value="volvo">Total Transaction</option>
                        </select>
                      </th>
                      <th>
                        {" "}
                        <select name="cars" id="cars" className="home-select-custom">
                          <option value="volvo">Action</option>
                        </select>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-width">
                    <tr>
                      <td>Diky</td>
                      <td className="warga">Warga</td>
                      <td>Chicken & Ribs Combo</td>
                      <td>IDR 194,700</td>
                      <td>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.895 5.775V4.06C10.895 3.445 10.425 2.765 9.85001 2.55L7.35501 1.615C6.94001 1.46 6.26001 1.46 5.84501 1.615L3.35001 2.555C2.77501 2.77 2.30501 3.45 2.30501 4.06V7.775C2.30501 8.365 2.69501 9.14 3.17001 9.495L5.32001 11.1C5.67001 11.37 6.13501 11.5 6.60001 11.5" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M8.60001 10.5C9.70458 10.5 10.6 9.60457 10.6 8.5C10.6 7.39543 9.70458 6.5 8.60001 6.5C7.49544 6.5 6.60001 7.39543 6.60001 8.5C6.60001 9.60457 7.49544 10.5 8.60001 10.5Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M11.0978 11H11.1023" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="home-margin-table">Detail</span>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.62999 2.3L2.52499 6.645C2.36999 6.81 2.21999 7.135 2.18999 7.36L2.00499 8.98C1.93999 9.565 2.35999 9.965 2.93999 9.865L4.54999 9.59C4.77499 9.55 5.08999 9.385 5.24499 9.215L9.34999 4.87C10.06 4.12 10.38 3.265 9.27499 2.22C8.17499 1.185 7.33999 1.55 6.62999 2.3Z" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M5.94501 3.025C6.16001 4.405 7.28001 5.46 8.67001 5.6" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M1.5 11.5H10.5" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 3.49C8.835 3.325 7.16 3.24 5.49 3.24C4.5 3.24 3.51 3.29 2.52 3.39L1.5 3.49" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.25 2.985L4.36 2.33C4.44 1.855 4.5 1.5 5.345 1.5H6.655C7.5 1.5 7.565 1.875 7.64 2.335L7.75 2.985" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9.42501 5.07L9.10001 10.105C9.04501 10.89 9.00001 11.5 7.60501 11.5H4.39501C3.00001 11.5 2.95501 10.89 2.90001 10.105L2.57501 5.07" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M5.16501 8.75H6.83001" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.75 6.75H7.25" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Irsyad</td>
                      <td className="juragan">Juragan</td>
                      <td>Fried Chicken Dinne</td>
                      <td>IDR 1,040.920</td>
                      <td>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.895 5.775V4.06C10.895 3.445 10.425 2.765 9.85001 2.55L7.35501 1.615C6.94001 1.46 6.26001 1.46 5.84501 1.615L3.35001 2.555C2.77501 2.77 2.30501 3.45 2.30501 4.06V7.775C2.30501 8.365 2.69501 9.14 3.17001 9.495L5.32001 11.1C5.67001 11.37 6.13501 11.5 6.60001 11.5" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M8.60001 10.5C9.70458 10.5 10.6 9.60457 10.6 8.5C10.6 7.39543 9.70458 6.5 8.60001 6.5C7.49544 6.5 6.60001 7.39543 6.60001 8.5C6.60001 9.60457 7.49544 10.5 8.60001 10.5Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M11.0978 11H11.1023" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="home-margin-table">Detail</span>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.62999 2.3L2.52499 6.645C2.36999 6.81 2.21999 7.135 2.18999 7.36L2.00499 8.98C1.93999 9.565 2.35999 9.965 2.93999 9.865L4.54999 9.59C4.77499 9.55 5.08999 9.385 5.24499 9.215L9.34999 4.87C10.06 4.12 10.38 3.265 9.27499 2.22C8.17499 1.185 7.33999 1.55 6.62999 2.3Z" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M5.94501 3.025C6.16001 4.405 7.28001 5.46 8.67001 5.6" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M1.5 11.5H10.5" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 3.49C8.835 3.325 7.16 3.24 5.49 3.24C4.5 3.24 3.51 3.29 2.52 3.39L1.5 3.49" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.25 2.985L4.36 2.33C4.44 1.855 4.5 1.5 5.345 1.5H6.655C7.5 1.5 7.565 1.875 7.64 2.335L7.75 2.985" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9.42501 5.07L9.10001 10.105C9.04501 10.89 9.00001 11.5 7.60501 11.5H4.39501C3.00001 11.5 2.95501 10.89 2.90001 10.105L2.57501 5.07" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M5.16501 8.75H6.83001" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.75 6.75H7.25" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Azis</td>
                      <td className="sultan">Sultan</td>
                      <td>Dark & Stormy</td>
                      <td>IDR 590,080</td>
                      <td>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.895 5.775V4.06C10.895 3.445 10.425 2.765 9.85001 2.55L7.35501 1.615C6.94001 1.46 6.26001 1.46 5.84501 1.615L3.35001 2.555C2.77501 2.77 2.30501 3.45 2.30501 4.06V7.775C2.30501 8.365 2.69501 9.14 3.17001 9.495L5.32001 11.1C5.67001 11.37 6.13501 11.5 6.60001 11.5" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M8.60001 10.5C9.70458 10.5 10.6 9.60457 10.6 8.5C10.6 7.39543 9.70458 6.5 8.60001 6.5C7.49544 6.5 6.60001 7.39543 6.60001 8.5C6.60001 9.60457 7.49544 10.5 8.60001 10.5Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M11.0978 11H11.1023" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="home-margin-table">Detail</span>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.62999 2.3L2.52499 6.645C2.36999 6.81 2.21999 7.135 2.18999 7.36L2.00499 8.98C1.93999 9.565 2.35999 9.965 2.93999 9.865L4.54999 9.59C4.77499 9.55 5.08999 9.385 5.24499 9.215L9.34999 4.87C10.06 4.12 10.38 3.265 9.27499 2.22C8.17499 1.185 7.33999 1.55 6.62999 2.3Z" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M5.94501 3.025C6.16001 4.405 7.28001 5.46 8.67001 5.6" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M1.5 11.5H10.5" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 3.49C8.835 3.325 7.16 3.24 5.49 3.24C4.5 3.24 3.51 3.29 2.52 3.39L1.5 3.49" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.25 2.985L4.36 2.33C4.44 1.855 4.5 1.5 5.345 1.5H6.655C7.5 1.5 7.565 1.875 7.64 2.335L7.75 2.985" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9.42501 5.07L9.10001 10.105C9.04501 10.89 9.00001 11.5 7.60501 11.5H4.39501C3.00001 11.5 2.95501 10.89 2.90001 10.105L2.57501 5.07" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M5.16501 8.75H6.83001" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.75 6.75H7.25" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Niix</td>
                      <td className="konglomerat">konglomerat</td>
                      <td>BBQ Rib Dinner</td>
                      <td>IDR 467,500 </td>
                      <td>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.895 5.775V4.06C10.895 3.445 10.425 2.765 9.85001 2.55L7.35501 1.615C6.94001 1.46 6.26001 1.46 5.84501 1.615L3.35001 2.555C2.77501 2.77 2.30501 3.45 2.30501 4.06V7.775C2.30501 8.365 2.69501 9.14 3.17001 9.495L5.32001 11.1C5.67001 11.37 6.13501 11.5 6.60001 11.5" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M8.60001 10.5C9.70458 10.5 10.6 9.60457 10.6 8.5C10.6 7.39543 9.70458 6.5 8.60001 6.5C7.49544 6.5 6.60001 7.39543 6.60001 8.5C6.60001 9.60457 7.49544 10.5 8.60001 10.5Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M11.0978 11H11.1023" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="home-margin-table">Detail</span>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.62999 2.3L2.52499 6.645C2.36999 6.81 2.21999 7.135 2.18999 7.36L2.00499 8.98C1.93999 9.565 2.35999 9.965 2.93999 9.865L4.54999 9.59C4.77499 9.55 5.08999 9.385 5.24499 9.215L9.34999 4.87C10.06 4.12 10.38 3.265 9.27499 2.22C8.17499 1.185 7.33999 1.55 6.62999 2.3Z" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M5.94501 3.025C6.16001 4.405 7.28001 5.46 8.67001 5.6" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M1.5 11.5H10.5" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 3.49C8.835 3.325 7.16 3.24 5.49 3.24C4.5 3.24 3.51 3.29 2.52 3.39L1.5 3.49" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.25 2.985L4.36 2.33C4.44 1.855 4.5 1.5 5.345 1.5H6.655C7.5 1.5 7.565 1.875 7.64 2.335L7.75 2.985" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9.42501 5.07L9.10001 10.105C9.04501 10.89 9.00001 11.5 7.60501 11.5H4.39501C3.00001 11.5 2.95501 10.89 2.90001 10.105L2.57501 5.07" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M5.16501 8.75H6.83001" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.75 6.75H7.25" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Diky</td>
                      <td className="warga">Warga</td>
                      <td>Chicken & Ribs Combo</td>
                      <td>IDR 194,700</td>
                      <td>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.895 5.775V4.06C10.895 3.445 10.425 2.765 9.85001 2.55L7.35501 1.615C6.94001 1.46 6.26001 1.46 5.84501 1.615L3.35001 2.555C2.77501 2.77 2.30501 3.45 2.30501 4.06V7.775C2.30501 8.365 2.69501 9.14 3.17001 9.495L5.32001 11.1C5.67001 11.37 6.13501 11.5 6.60001 11.5" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M8.60001 10.5C9.70458 10.5 10.6 9.60457 10.6 8.5C10.6 7.39543 9.70458 6.5 8.60001 6.5C7.49544 6.5 6.60001 7.39543 6.60001 8.5C6.60001 9.60457 7.49544 10.5 8.60001 10.5Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M11.0978 11H11.1023" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="home-margin-table">Detail</span>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.62999 2.3L2.52499 6.645C2.36999 6.81 2.21999 7.135 2.18999 7.36L2.00499 8.98C1.93999 9.565 2.35999 9.965 2.93999 9.865L4.54999 9.59C4.77499 9.55 5.08999 9.385 5.24499 9.215L9.34999 4.87C10.06 4.12 10.38 3.265 9.27499 2.22C8.17499 1.185 7.33999 1.55 6.62999 2.3Z" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M5.94501 3.025C6.16001 4.405 7.28001 5.46 8.67001 5.6" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M1.5 11.5H10.5" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 3.49C8.835 3.325 7.16 3.24 5.49 3.24C4.5 3.24 3.51 3.29 2.52 3.39L1.5 3.49" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.25 2.985L4.36 2.33C4.44 1.855 4.5 1.5 5.345 1.5H6.655C7.5 1.5 7.565 1.875 7.64 2.335L7.75 2.985" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9.42501 5.07L9.10001 10.105C9.04501 10.89 9.00001 11.5 7.60501 11.5H4.39501C3.00001 11.5 2.95501 10.89 2.90001 10.105L2.57501 5.07" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M5.16501 8.75H6.83001" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.75 6.75H7.25" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Irsyad</td>
                      <td className="juragan">Juragan</td>
                      <td>Fried Chicken Dinne</td>
                      <td>IDR 1,040.920</td>
                      <td>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.895 5.775V4.06C10.895 3.445 10.425 2.765 9.85001 2.55L7.35501 1.615C6.94001 1.46 6.26001 1.46 5.84501 1.615L3.35001 2.555C2.77501 2.77 2.30501 3.45 2.30501 4.06V7.775C2.30501 8.365 2.69501 9.14 3.17001 9.495L5.32001 11.1C5.67001 11.37 6.13501 11.5 6.60001 11.5" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M8.60001 10.5C9.70458 10.5 10.6 9.60457 10.6 8.5C10.6 7.39543 9.70458 6.5 8.60001 6.5C7.49544 6.5 6.60001 7.39543 6.60001 8.5C6.60001 9.60457 7.49544 10.5 8.60001 10.5Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M11.0978 11H11.1023" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="home-margin-table">Detail</span>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.62999 2.3L2.52499 6.645C2.36999 6.81 2.21999 7.135 2.18999 7.36L2.00499 8.98C1.93999 9.565 2.35999 9.965 2.93999 9.865L4.54999 9.59C4.77499 9.55 5.08999 9.385 5.24499 9.215L9.34999 4.87C10.06 4.12 10.38 3.265 9.27499 2.22C8.17499 1.185 7.33999 1.55 6.62999 2.3Z" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M5.94501 3.025C6.16001 4.405 7.28001 5.46 8.67001 5.6" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M1.5 11.5H10.5" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 3.49C8.835 3.325 7.16 3.24 5.49 3.24C4.5 3.24 3.51 3.29 2.52 3.39L1.5 3.49" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.25 2.985L4.36 2.33C4.44 1.855 4.5 1.5 5.345 1.5H6.655C7.5 1.5 7.565 1.875 7.64 2.335L7.75 2.985" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9.42501 5.07L9.10001 10.105C9.04501 10.89 9.00001 11.5 7.60501 11.5H4.39501C3.00001 11.5 2.95501 10.89 2.90001 10.105L2.57501 5.07" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M5.16501 8.75H6.83001" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.75 6.75H7.25" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Azis</td>
                      <td className="sultan">Sultan</td>
                      <td>Dark & Stormy</td>
                      <td>IDR 590,080</td>
                      <td>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.895 5.775V4.06C10.895 3.445 10.425 2.765 9.85001 2.55L7.35501 1.615C6.94001 1.46 6.26001 1.46 5.84501 1.615L3.35001 2.555C2.77501 2.77 2.30501 3.45 2.30501 4.06V7.775C2.30501 8.365 2.69501 9.14 3.17001 9.495L5.32001 11.1C5.67001 11.37 6.13501 11.5 6.60001 11.5" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M8.60001 10.5C9.70458 10.5 10.6 9.60457 10.6 8.5C10.6 7.39543 9.70458 6.5 8.60001 6.5C7.49544 6.5 6.60001 7.39543 6.60001 8.5C6.60001 9.60457 7.49544 10.5 8.60001 10.5Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M11.0978 11H11.1023" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="home-margin-table">Detail</span>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.62999 2.3L2.52499 6.645C2.36999 6.81 2.21999 7.135 2.18999 7.36L2.00499 8.98C1.93999 9.565 2.35999 9.965 2.93999 9.865L4.54999 9.59C4.77499 9.55 5.08999 9.385 5.24499 9.215L9.34999 4.87C10.06 4.12 10.38 3.265 9.27499 2.22C8.17499 1.185 7.33999 1.55 6.62999 2.3Z" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M5.94501 3.025C6.16001 4.405 7.28001 5.46 8.67001 5.6" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M1.5 11.5H10.5" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 3.49C8.835 3.325 7.16 3.24 5.49 3.24C4.5 3.24 3.51 3.29 2.52 3.39L1.5 3.49" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.25 2.985L4.36 2.33C4.44 1.855 4.5 1.5 5.345 1.5H6.655C7.5 1.5 7.565 1.875 7.64 2.335L7.75 2.985" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9.42501 5.07L9.10001 10.105C9.04501 10.89 9.00001 11.5 7.60501 11.5H4.39501C3.00001 11.5 2.95501 10.89 2.90001 10.105L2.57501 5.07" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M5.16501 8.75H6.83001" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.75 6.75H7.25" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Niix</td>
                      <td className="konglomerat">konglomerat</td>
                      <td>BBQ Rib Dinner</td>
                      <td>IDR 467,500 </td>
                      <td>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.895 5.775V4.06C10.895 3.445 10.425 2.765 9.85001 2.55L7.35501 1.615C6.94001 1.46 6.26001 1.46 5.84501 1.615L3.35001 2.555C2.77501 2.77 2.30501 3.45 2.30501 4.06V7.775C2.30501 8.365 2.69501 9.14 3.17001 9.495L5.32001 11.1C5.67001 11.37 6.13501 11.5 6.60001 11.5" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M8.60001 10.5C9.70458 10.5 10.6 9.60457 10.6 8.5C10.6 7.39543 9.70458 6.5 8.60001 6.5C7.49544 6.5 6.60001 7.39543 6.60001 8.5C6.60001 9.60457 7.49544 10.5 8.60001 10.5Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M11.0978 11H11.1023" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="home-margin-table">Detail</span>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.62999 2.3L2.52499 6.645C2.36999 6.81 2.21999 7.135 2.18999 7.36L2.00499 8.98C1.93999 9.565 2.35999 9.965 2.93999 9.865L4.54999 9.59C4.77499 9.55 5.08999 9.385 5.24499 9.215L9.34999 4.87C10.06 4.12 10.38 3.265 9.27499 2.22C8.17499 1.185 7.33999 1.55 6.62999 2.3Z" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M5.94501 3.025C6.16001 4.405 7.28001 5.46 8.67001 5.6" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M1.5 11.5H10.5" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 3.49C8.835 3.325 7.16 3.24 5.49 3.24C4.5 3.24 3.51 3.29 2.52 3.39L1.5 3.49" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.25 2.985L4.36 2.33C4.44 1.855 4.5 1.5 5.345 1.5H6.655C7.5 1.5 7.565 1.875 7.64 2.335L7.75 2.985" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9.42501 5.07L9.10001 10.105C9.04501 10.89 9.00001 11.5 7.60501 11.5H4.39501C3.00001 11.5 2.95501 10.89 2.90001 10.105L2.57501 5.07" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M5.16501 8.75H6.83001" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.75 6.75H7.25" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Diky</td>
                      <td className="warga">Warga</td>
                      <td>Chicken & Ribs Combo</td>
                      <td>IDR 194,700</td>
                      <td>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.895 5.775V4.06C10.895 3.445 10.425 2.765 9.85001 2.55L7.35501 1.615C6.94001 1.46 6.26001 1.46 5.84501 1.615L3.35001 2.555C2.77501 2.77 2.30501 3.45 2.30501 4.06V7.775C2.30501 8.365 2.69501 9.14 3.17001 9.495L5.32001 11.1C5.67001 11.37 6.13501 11.5 6.60001 11.5" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M8.60001 10.5C9.70458 10.5 10.6 9.60457 10.6 8.5C10.6 7.39543 9.70458 6.5 8.60001 6.5C7.49544 6.5 6.60001 7.39543 6.60001 8.5C6.60001 9.60457 7.49544 10.5 8.60001 10.5Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M11.0978 11H11.1023" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="home-margin-table">Detail</span>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.62999 2.3L2.52499 6.645C2.36999 6.81 2.21999 7.135 2.18999 7.36L2.00499 8.98C1.93999 9.565 2.35999 9.965 2.93999 9.865L4.54999 9.59C4.77499 9.55 5.08999 9.385 5.24499 9.215L9.34999 4.87C10.06 4.12 10.38 3.265 9.27499 2.22C8.17499 1.185 7.33999 1.55 6.62999 2.3Z" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M5.94501 3.025C6.16001 4.405 7.28001 5.46 8.67001 5.6" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M1.5 11.5H10.5" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 3.49C8.835 3.325 7.16 3.24 5.49 3.24C4.5 3.24 3.51 3.29 2.52 3.39L1.5 3.49" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.25 2.985L4.36 2.33C4.44 1.855 4.5 1.5 5.345 1.5H6.655C7.5 1.5 7.565 1.875 7.64 2.335L7.75 2.985" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9.42501 5.07L9.10001 10.105C9.04501 10.89 9.00001 11.5 7.60501 11.5H4.39501C3.00001 11.5 2.95501 10.89 2.90001 10.105L2.57501 5.07" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M5.16501 8.75H6.83001" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.75 6.75H7.25" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td>Irsyad</td>
                      <td className="juragan">Juragan</td>
                      <td>Fried Chicken Dinne</td>
                      <td>IDR 1,040.920</td>
                      <td>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.895 5.775V4.06C10.895 3.445 10.425 2.765 9.85001 2.55L7.35501 1.615C6.94001 1.46 6.26001 1.46 5.84501 1.615L3.35001 2.555C2.77501 2.77 2.30501 3.45 2.30501 4.06V7.775C2.30501 8.365 2.69501 9.14 3.17001 9.495L5.32001 11.1C5.67001 11.37 6.13501 11.5 6.60001 11.5" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M8.60001 10.5C9.70458 10.5 10.6 9.60457 10.6 8.5C10.6 7.39543 9.70458 6.5 8.60001 6.5C7.49544 6.5 6.60001 7.39543 6.60001 8.5C6.60001 9.60457 7.49544 10.5 8.60001 10.5Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M11.0978 11H11.1023" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="home-margin-table">Detail</span>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.62999 2.3L2.52499 6.645C2.36999 6.81 2.21999 7.135 2.18999 7.36L2.00499 8.98C1.93999 9.565 2.35999 9.965 2.93999 9.865L4.54999 9.59C4.77499 9.55 5.08999 9.385 5.24499 9.215L9.34999 4.87C10.06 4.12 10.38 3.265 9.27499 2.22C8.17499 1.185 7.33999 1.55 6.62999 2.3Z" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M5.94501 3.025C6.16001 4.405 7.28001 5.46 8.67001 5.6" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.4" d="M1.5 11.5H10.5" stroke="#110D17" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg className="home-margin-table" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.5 3.49C8.835 3.325 7.16 3.24 5.49 3.24C4.5 3.24 3.51 3.29 2.52 3.39L1.5 3.49" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.25 2.985L4.36 2.33C4.44 1.855 4.5 1.5 5.345 1.5H6.655C7.5 1.5 7.565 1.875 7.64 2.335L7.75 2.985" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9.42501 5.07L9.10001 10.105C9.04501 10.89 9.00001 11.5 7.60501 11.5H4.39501C3.00001 11.5 2.95501 10.89 2.90001 10.105L2.57501 5.07" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M5.16501 8.75H6.83001" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                          <path opacity="0.34" d="M4.75 6.75H7.25" stroke="#F02D3A" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-flex justify-content-between">
                  <p className="home-footer dont-show-it">Showing 10 Data Customers</p>
                  <div className="table-fluid-custom">
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-12 col-md-12 right-bar">
              <div className="right-bar-square">
                <p>See analytics of the Customer Clearly</p>
                <div className="circle"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
                <button className="r-custom-button">See Analytics</button>
              </div>
              <div className="r-header">
                <h1 className="r-header-1">Top Menu</h1>
                <h1 className="r-header-2">This Week</h1>
                <p>10 - 12 Agustus 2023</p>
                <div className="r-populer">
                  <span>Nasi Goreng Jamur Special Resto Pak Min</span>
                  <svg className="r-1" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_577)">
                      <rect width="23.8074" height="23.443" transform="translate(3.3291 0.00524902) rotate(8)" fill="#F17300" />
                      <path d="M12.5719 18.7031C12.3173 18.6443 12.126 18.5187 11.998 18.3263C11.8721 18.1248 11.8364 17.9059 11.891 17.6694L13.4783 10.7943L13.6 11.1385L12.4341 11.6452C12.2837 11.7158 12.113 11.7291 11.922 11.685C11.7038 11.6346 11.5317 11.5087 11.4058 11.3072C11.2799 11.1057 11.2432 10.8913 11.2956 10.6639C11.3628 10.3729 11.5584 10.169 11.8823 10.0522L14.149 9.19617C14.2546 9.15351 14.3651 9.13113 14.4806 9.12904C14.6051 9.12906 14.7174 9.14061 14.8174 9.1637C15.0811 9.22459 15.2714 9.35473 15.3882 9.55411C15.5071 9.74441 15.5393 9.95778 15.4847 10.1942L13.6644 18.0788C13.6098 18.3153 13.4772 18.4954 13.2666 18.6192C13.0672 18.736 12.8357 18.764 12.5719 18.7031Z" fill="white" />
                    </g>
                    <defs>
                      <filter id="filter0_d_1_577" x="0.0664673" y="0.00524902" width="28.8384" height="28.5282" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="2" dy="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.27451 0 0 0 0 0.27451 0 0 0 0 0.27451 0 0 0 1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_577" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_577" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <p className="r-others">2. Tongseng Sapi Gurih</p>
                <p className="r-others">3. Nasi Gudeg Telur Ceker</p>
                <p className="r-others">4. Nasi Ayam serundeng</p>
                <p className="r-others">5. Nasi Goreng Seafood</p>
                <svg className="r-grafik" width="227" height="228" viewBox="0 0 227 228" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-2.94362 150.026L-5.91148 152.676L-5.91148 229.709L233.741 229.709L233.741 1.00004L232.249 13.6106C230.757 26.2211 227.772 51.4421 220.83 49.9454C213.887 48.4487 202.985 20.2343 196.822 23.997C190.658 27.7597 189.232 63.4994 185.127 81.1592C181.023 98.819 174.239 98.3989 165.562 85.1992C156.885 71.9995 146.315 46.0203 138.513 38.7263C130.712 31.4322 125.678 42.8232 120.56 53.644C115.442 64.4647 110.24 74.7153 103.722 76.0856C97.2035 77.4559 89.3697 69.9461 84.5656 82.8855C79.7616 95.8249 77.9873 129.214 73.164 142.023C68.3407 154.833 60.4684 147.063 53.9485 148.421C47.4285 149.779 42.2609 160.265 35.4775 159.845C28.6941 159.425 20.2949 148.098 13.1274 145.086C5.95994 142.074 0.0242315 147.375 -2.94362 150.026Z" fill="url(#paint0_linear_1_565)" stroke="#F17300" />
                  <defs>
                    <linearGradient id="paint0_linear_1_565" x1="97" y1="-309.5" x2="97" y2="180" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#F17300" />
                      <stop offset="1" stop-color="#F17300" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
