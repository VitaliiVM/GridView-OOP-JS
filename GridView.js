

class GridView {
    /**
     *  properties
     *  @param [array] _tableClass - css классы оформления
     *  @param [array] data  - выходные данные
     *  @param [array] _attribute - управляем что выводим
     *  @param [array] _element  - куда выводить таблицу
     *  @param [array] _header  - заголовок таблицы
     *  @param [array] _headerClass  - css классы заголовка
     */
    constructor() {
        this._header = "";
        this._headerClass = [];
        this._tableClass = [];
        this._element = 'body';
        this._attribute = [];
    }

    /**
     * Method set header
     */
    set header(header) {
        if (typeof header === 'string' && header.trim() != '') {
            this._header = header.trim();
            return true;
        }
        return false;
    }

    /**
     * Method set headerClass
     */
    set headerClass(_headerClass) {
        if (typeof _headerClass === 'object') {
            this._headerClass = _headerClass;
            return true;
        }
        return false;
    }

    /**
     * Method set element
     */
    set element(element) {
        if (document.querySelector(element)) {
            this._element = element;
            return true;
        }
        return false;
    }


    /**
     * Method for show GridWiewTable
     */
    render() {
        //show header
        if (this._header) {
            const header = document.createElement('h1');
            header.textContent = this._header;
            this._headerClass.forEach(cssClass => {
                header.classList.add(cssClass);
            });
            document.querySelector(this._element).append(header);
        }
        //show table
        const table = document.createElement('table');
        this._tableClass.forEach(cssClass => {
            table.classList.add(cssClass);
        });
        //create table header
        let trHeader = document.createElement('tr');
        for (let attributeKey in this._attribute) {
            let th = document.createElement('th');
            if (this._attribute[attributeKey].label) {
                th.textContent = this._attribute[attributeKey].label;
            } else {
                th.textContent = attributeKey;
            }
            trHeader.append(th);
        }
        table.append(trHeader);
        document.querySelector(this._element).append(table);
    }
}