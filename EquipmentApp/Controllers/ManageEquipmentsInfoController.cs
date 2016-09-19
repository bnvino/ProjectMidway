using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EquipmentApp.Controllers
{
    public class ManageEquipmentsInfoController : Controller
    {
        //
        // GET: /ManageEquipmentsInfo/
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AddNewEquipment()
        {
            return PartialView("AddNewEquipment");
        }

        public ActionResult ShowAllEquipments()
        {
            return PartialView("ShowAllEquipments");
        }

        public ActionResult EditEquipment()
        {
            return PartialView("EditEquipment");
        }

        public ActionResult DeleteEquipment()
        {
            return PartialView("DeleteEquipment");
        }
	}
}